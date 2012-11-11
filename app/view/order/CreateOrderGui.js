/**
 * Defines de Create Order GUI.
 * 
 * @author: Roberto Rodriguez Alcala <rralcala@gmail.com>
 **/

Ext.define('IMP.view.order.CreateOrderGui', {
	extend: 'Ext.Panel',
	
	requires: [
		'IMP.view.order.OrderDetailList', 
		'IMP.view.order.List',
		'IMP.view.order.ItemList'
	],

	alias: 'widget.createordergui',

	layout: 'anchor',

	initComponent: function() {
		
		this.items = [
			{
				xtype: 'orderlist',
				store: 'LocalOrder',
				anchor: '100% 26%',
				createOrderButtonVisible: true,
				clearFilterButtonVisible: false,
				isLocalStore: true,
				itemId: 'orderHeader'
			},{
				xtype: 'orderdetaillist', 
				anchor: '100% 37%',
				store: 'LocalOrderDetail',
				localFilter: true,
				deleteButtonVisible: true,
				itemId: 'orderDetail'
			},{
				xtype: 'itemlist',
				anchor: "100% 37%",
				itemId: 'itemList'
			} 
		];
		
		this.callParent(arguments);
	},

	afterRender: function() {
		this.callParent(arguments);
		this.getComponent('itemList').getStore().guaranteeRange(0, Conf.pageSize - 1);
	}
});
