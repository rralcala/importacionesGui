/**
 * Defines the TreeStore used by the Navigation Tree
 * 
 * @author: Jorge Ramírez <jorgeramirez1990@gmail.com>
 **/

var labels = Conf.labelsText.NavigationTree;

Ext.define('IMP.store.NavigationTreeStore', {
	extend: 'Ext.data.TreeStore',
	
	root: {
		expanded: true, 
		children: [
			{ 
				text: labels.ordersText, 
				expanded: true,
				children: [
					{
						text: labels.indicatorsText,
						leaf: true,
						iconCls: 'icon-indicators'
					},{
						text: labels.createOrderText,
						leaf: true,
						iconCls: 'icon-create-orders'
					},{
						text: labels.listOrderText,
						leaf: true,
						iconCls: 'icon-list-orders'
					}
				]
			}, { 
				text: labels.cashFlowText, 
				expanded: true,
				children: [
					{ 
						text: "...", 
						leaf: true
					}
				]
			}, { 
				text: labels.systemText, 
				expanded: true,
				iconCls: 'icon-config',
				children: [
					{	
						text: labels.userCrudText,
						leaf: true,
						iconCls: 'icon-user'
					},{
						text: labels.logoutText + " | <b><i>" +  Ext.util.Cookies.get("IMP-USERINFO") + "</i></b>",
						leaf: true,
						iconCls: "icon-logout"
					}
				]
			}
		]
	}
});
