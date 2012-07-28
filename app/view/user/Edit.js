/**
 * Defines a window to update user's information.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.view.user.Edit', {
    extend: 'Ext.window.Window',
    
    alias : 'widget.useredit',
    
    layout: 'fit',
    
    autoShow: true,
    
    resizable: false,
    
    modal: true,
    
	initComponent: function() {
		var me = this,
			labels = Conf.labelsText.user.Edit;
		
		me.title = labels.title;

		me.items = [
			{
				xtype: 'userbasicform',
				isCreate: false
			}
		];
		
        this.buttons = [
            {
                text: labels.saveButtonText,
                action: 'save',
                iconCls: 'icon-save'
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
