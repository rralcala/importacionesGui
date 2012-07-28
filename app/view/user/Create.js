/**
 * Defines a window to create a new user.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/


Ext.define('IMP.view.user.Create', {
    extend: 'Ext.window.Window',
    
    alias : 'widget.useredit',
    
    layout: 'fit',
    
    autoShow: true,
	
	alias: 'widget.usercreate',
	
	initComponent: function() {
		var me = this,
			labels = Conf.labelsText.user.Create;
		
		me.title = labels.title;
		me.items = [
			{
				xtype: 'userbasicform',
				isCreate: true
			}
		];
        me.buttons = [
            {
                text: labels.createButtonText,
                action: 'create',
                iconCls: 'icon-user-add'
            },
            {
                text: labels.cancelButtonText,
                scope: this,
                handler: me.close,
                iconCls: 'icon-cancel'
            }
        ];
        this.callParent(arguments);
	}
});
