/**
 * Defines a grid wich shows the list of users.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    
    alias : 'widget.userlist',
    
    store: 'Users',
    
    //verticalScrollerType: 'paginggridscroller',
	
    //invalidateScrollerOnRefresh: false,
    
    id: 'userlist',

    viewConfig: {
            trackOver: false
    },
    
    initComponent: function() {
		var labels = Conf.labelsText.user.List,
			me = this;
		
		this.title = labels.userListTitle;
		
		var filters = {
            ftype: 'filters',
            encode: true, // json encode the filter query
            local: false, // remote filtering
			filters: [
				{
					type: 'string', 
					dataIndex: 'username'
				},{
					type: 'string', 
					dataIndex: 'name'
				},{
					type: 'string', 
					dataIndex: 'email'
				}
			]
        };
        
        this.features = [filters];
		
        this.columns = [
			{
				header: labels.usernameHeader,  
				dataIndex: 'username',  
				flex: 1
			},{
				header: labels.nameHeader,  
				dataIndex: 'name',  
				flex: 1
			},{
				header: labels.emailHeader, 
				dataIndex: 'email', 
				flex: 1
			}
        ];

		this.dockedItems = [
			{
                xtype: 'toolbar',
                items: [
					{
						iconCls: 'icon-user-add',
						text: labels.addButtonText,
						action: 'showCreate'
					},{
						iconCls: 'icon-user-delete',
						text: labels.deleteButtonText,
						action: 'delete',
						id: 'delete',
						disabled: true
					}, {
						iconCls: 'x-tbar-loading',
						text: labels.refreshButtonText,
						action: 'refresh',
						id: 'refresh'
					},{
                        iconCls: 'icon-clear',
                        text: labels.clearFiltersButtonText,
                        action: 'clearFilters',
                        id: 'filter'
                    }
				]
			},{
				xtype: 'pagingtoolbar',
				store: IMP.App.getStore("Users"),
				dock: 'bottom',
				displayInfo: true
			}
		];

		this.selModel = Ext.create('Ext.selection.CheckboxModel', {
			listeners: {
				selectionchange: {fn: this.onSelectChange, scope: this}
			}
		});
		
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },

    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
    }    
});
