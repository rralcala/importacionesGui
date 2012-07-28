/**
 * Users CRUD Controller.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
		'user.List',
		'user.BasicForm',
		'user.Edit',
		'user.Create'
    ],
    
    stores: [
		'Users'
    ],
    
    models: [
		'User'
    ],

    init: function() {
		this.control({
			'userlist': {
				itemdblclick: this.editUser
			},
			'useredit button[action=save]': {
				click: this.updateUser
			},
			'userlist button[action=showCreate]': {
				click: this.showCreateUserWindow
			},
			'usercreate button[action=create]': {
				click: this.createUser
			},
			'userlist button[action=delete]': {
				click: this.onDeleteClick
			},
			'userlist button[action=refresh]': {
				click: this.onRefreshClick
			},
            'userlist button[action=clearFilters]': {
                click: this.onClearFiltersClicked
            }			
		});
	},


	/**
	 * Shows a form to create a new user
	 **/
	showCreateUserWindow: function(button){
		var view = Ext.widget('usercreate');
	},


	/**
	 * Shows a form to update user's information
	 **/
    editUser: function(grid, record) {
		var view = Ext.widget('useredit');
		view.down("form").loadRecord(record);
    },
    
    /**
     * List the users that are register in the sistem
     **/
    listUsers: function() {
		var view = Ext.widget("userlist"),
			contentRegion = Ext.getCmp('contentRegion');
		
		view.getStore().guaranteeRange(0, Conf.pageSize - 1);
		contentRegion.add(view);
	},

	/**
	 * Updates user's information
	 **/
	updateUser: function(button){
		var win    = button.up('window'),
			form   = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();

		record.set(values);
		win.close();
	},
	
	/**
	 * Creates a new user
	 **/	
	createUser: function(button) {
		var win    = button.up('window'),
			form   = win.down('form'),
			values = form.getValues(),
			store = IMP.App.getStore("Users");
		
		if(form.getForm().isValid() && !form.userNameExist){
			store.add(values);
			win.close();
		}else{
			if(form.userNameExist)
				Ext.Msg.alert('Error', Conf.labelsText.user.BasicForm.usernameExistMsg);
		}
	},

	/**
	 * Deletes an user.
	 **/
    onDeleteClick: function(button){
        var grid = button.up("userlist"),
			selections = grid.getView().getSelectionModel().getSelection(),
			store = IMP.App.getStore("Users");
		
		store.remove(selections);
    },

	/**
	 * Reloads the Users store.
	 **/
	onRefreshClick: function(button){
		var grid = Ext.getCmp("userlist");
		grid.getStore().guaranteeRange(0, Conf.pageSize - 1);
		grid.getView().scrollToTop();
	},

    /**
     * Clears filters data
     **/
    onClearFiltersClicked: function(button){
        Ext.getCmp("userlist").filters.clearFilters();
    }
});
