Ext.define('IMP.view.user.BasicForm', {
	extend: 'Ext.form.Panel',
	
	alias: 'widget.userbasicform',
	
	bodyStyle: {padding: '10 10 10 10'},
	
	
	initComponent: function(){
		var me = this,
			labels = Conf.labelsText.user.BasicForm,
			isCreate = me.isCreate;
		
		me.userNameExist = false; ///indicates if the username name currently chosen by the user is available.
		
		
		/** Check whether the given username is available.
		 * @param field: username field.
		 **/
		me.isNotUsed = function(username){
			
			Ext.Ajax.request({
				url: Conf.serverUrl + 'users/checkusername',
				method: 'POST',
				params: {
					username: username
				},
				success: function(resp){
					var jsonData = Ext.JSON.decode(resp.responseText);
					if(jsonData.success){
						me.userNameExist = true;
						Ext.Msg.alert('Error', labels.usernameExistMsg);
					}else{
						me.userNameExist = false;
					}
				},
			});	
		}
		
		/**
		 * Check whether the password and its confirmation are equal.
		 * 
		 * @param checkConfPass: the confirmation password textfield.
		 **/
		me.checkConfPass = function(confPassField){
			var passField = confPassField.previousSibling();
			if(passField.getValue() != confPassField.getValue())
				Ext.Msg.alert('Error', labels.passConfMsg);
		}

		me.items =  [
			{
				xtype: 'hidden',
				name: 'id'
			},{
				xtype: 'textfield',
				name : 'username',
				fieldLabel: labels.usernameFieldLabel,
				allowBlank: false,
				regex: /^[a-zA-Z][-_.a-zA-Z0-9]{0,32}$/,
				invalidText: labels.usernameInvalidText,
				disabled: !isCreate,
				listeners: {
					blur: function(field){
						if(field.getValue().length > 0)
							me.isNotUsed(field.getValue())
					}
				}
			},{
				xtype: 'textfield',
				name : 'new_password',
				inputType: 'password',
				fieldLabel: labels.passwordFieldLabel,
				allowBlank: !isCreate,
				regex: /^.{5,32}$/,
				invalidText: labels.passwordInvalidText
			},{
				xtype: 'textfield',
				name : 'new_password_repeat',
				inputType: 'password',
				fieldLabel: labels.passwordRepeatFieldLabel,
				allowBlank: !isCreate,
				listeners: {
					blur: me.checkConfPass
				}
			},{
				xtype: 'textfield',
				name : 'name',
				regex: /^.{1,64}$/,
				fieldLabel: labels.nameFieldLabel,
				invalidText: labels.nameInvalidText,
				allowBlank: false
			},{
				xtype: 'textfield',
				name : 'email',
				fieldLabel: labels.emailFieldLabel,
				vtype: 'email',
				invalidText: labels.emailInvalidText,
				regex: /^.{1,64}$/,
				allowBlank: false
			},{
				xtype: 'hidden',
				name: 'state'
			}
        ];
        
        this.callParent(arguments);
	}
});
