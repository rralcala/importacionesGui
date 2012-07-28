/**
 * The main viewport.
 * 
 * @author: Jorge Ramírez <jorgeramirez1990@gmail.com>
 */
 
Ext.define('IMP.view.Viewport', {
    extend: 'Ext.container.Viewport',

    id: 'viewport',
    layout: 'border',
    
    initComponent: function() {
        this.items = this.setupItems();
        this.callParent(arguments);
    },
	
	setupItems: function() {
		var userinfo = Ext.util.Cookies.get("IMP-USERINFO"),
			me = this,
			labels = Conf.labelsText.Viewport;
			
		if(userinfo){
			return [
				{
					region: 'west',
					collapsible: true,
					title: labels.navigationTitle,
					id: 'navigationRegion',
					width: 220,
					xtype: 'navtree',
					listeners: {
						itemclick: IMP.App.getController("Navigation").dispatch
					}
				},{
					region: 'center',
					xtype: 'panel',
					layout: 'border',
					id: 'centerRegion',
					items: [
						{
							region: 'north',
							xtype: 'panel',
							id: 'searchRegion',
							collapsed: true,
							hidden: true
						},{
							region: 'center',
							xtype: 'panel',
							id: 'contentRegion',
							layout: 'fit'
						}
					]
				}
			];
		}else{
			return [
				{
					region: 'center',
					items: [
						{
							xtype: 'loginform'
						}
					]
				}
			];
		}
	}
});
