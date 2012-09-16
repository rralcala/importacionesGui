/**
 * Controller that handles login/logout operations
 **/

Ext.define('IMP.controller.Login', {
    extend: 'Ext.app.Controller',
    
    views: [
		'login.LoginForm'
    ],

    init: function() {
						
        this.control({
			'loginform button[action=submit]': {
				click: this.loginSubmit
			}
		});
		
		
    },
    
    loginSubmit: function(button){
		var window = button.up("window"),
			form = window.down("form"),
			basicForm = form.getForm(),
			values = form.getValues();
		

		if(basicForm.isValid()){
			basicForm.submit({
				url: Conf.serverUrl + "site/jsonlogin",
				method: 'POST',
				success: this.onLoginSuccess,
				failure: this.onLoginFailure,
				scope: this
			});
		}
	},
	
	onLoginSuccess: function(f, a) {
		var username = Ext.get("username").getValue();
		Ext.util.Cookies.set('IMP-USERINFO', username);
		window.location.reload();
	},
	
	onLoginFailure: function(f, a) {

		if (a.failureType === Ext.form.Action.CONNECT_FAILURE){
			   Ext.Msg.alert('Error', 'Server reported:'+
					   a.response.status + ' ' + a.response.responseText);
		}
		
		if (a.failureType === Ext.form.Action.SERVER_INVALID){
			msgBox = Ext.Msg.show({
				title: 'Error',
				buttons: Ext.MessageBox.OK,
				icon: Ext.MessageBox.ERROR,
				msg: IMP.getErrorMsg(a.result.errorcode)
			});
		}
	},
	
	logout: function() {
		Ext.Ajax.request({
			method: 'POST',
			url: Conf.serverUrl + "site/logout",
			success: this.onLogoutSuccess,
			scope: this
		});
	},
	
	onLogoutSuccess: function(response) {
		Ext.util.Cookies.set('IMP-USERINFO', null, new Date("January 1, 1970"));
		Ext.util.Cookies.clear('IMP-USERINFO');
		window.location.reload();
	}
});
