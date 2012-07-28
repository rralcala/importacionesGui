Ext.define('IMP.view.login.LoginForm', {
	extend: 'Ext.window.Window',
	
	alias: 'widget.loginform',
	
	title: 'Login',
	
	layout: 'fit',
	
	autoShow: true,
	
	closable: false,
	
	//strings.
	langFieldSetTitle: 'Language Options',
	comboEmptyText: 'Select a language...',
	loginFieldSetTitle: 'Login Information',
	usernameFieldLabel: 'Username',
	passwordFieldLabel: 'Password',
	localeFailureMsg: 'Failed to load locale file.',
	englishLang: 'English',
	spanishLang: 'Spanish',
	loginButtonText: 'Login',
	
	initComponent: function() {
		var me = this;
		var labels = Conf.labelsText.LoginForm;
		
		var languages = [
			['en', 'English', 'ascii'],
			['es', 'Spanish', 'utf-8'],
		],

			langStore = Ext.create('Ext.data.ArrayStore', {
			fields: ['code', 'language', 'charset'],
			data : languages
		});
		
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'fieldset',
						title: labels.langFieldSetTitle,
						items: [
							{
								xtype: 'combobox',
								itemId: 'langCombo',
								store: langStore,
								displayField:'language',
								queryMode: 'local',
								emptyText: labels.comboEmptyText,
								hideLabel: true,
								listeners: {
									select: { fn: this.languageSetup, scope: this }
								}
							}
						]
					},{
						xtype: 'fieldset',
						title: labels.loginFieldSetTitle,
						items: [
							{
								xtype: 'textfield',
								name: 'username',
								inputId: 'username',
								fieldLabel: labels.usernameFieldLabel,
								allowBlank: false
							},{	
								xtype: 'textfield',
								name: 'password',
								inputType: 'password',
								fieldLabel: labels.passwordFieldLabel,
								allowBlank: false
							}
						]
					}
				]
			}
		];
		
		this.buttons = [
			{
				text: labels.loginButtonText,
				action: 'submit'
			}
		];

		this.callParent(arguments);
	},
	
	languageSetup: function(combo, records) {
		var record = records[0],
			url = Ext.util.Format.format("extjs/locale/ext-lang-{0}.js", record.get("code"));
		
		Ext.Ajax.request({
			url: url,
			success: function(response, opts) {
				eval(response.responseText);
				document.cookie = "IMP-LANG=" + record.data.code + ";path=/";
				window.location.reload();
			},
			failure: function() {
				Ext.Msg.alert('Failure', labels.localeFailureMsg);
			},
			scope: this
		});
		combo.setValue(record.data.language);
	}
});
