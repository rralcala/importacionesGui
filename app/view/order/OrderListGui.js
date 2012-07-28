/**
 * Defines de Order List GUI.
 * 
 * @author: Jorge Ramírez <jorgeramirez1990@gmail.com>
 * @author: Roberto Rodriguez <rralcala@gmail.com>
 **/

Ext.define('IMP.view.order.OrderListGui', {
	extend: 'Ext.Panel',
	
	requires: ['IMP.view.order.OrderDetailList', 'IMP.view.order.List'],

	alias: 'widget.orderlistgui',

	layout: {type: 'vbox', align: 'center'},

	initComponent: function() {
		this.items = [
			 {
				xtype: 'orderlist',
				store: 'Orders',
				width: '100%',
				flex: 1,
				itemId: 'orderHeader',
				createOrderButtonVisible: false,
				clearFilterButtonVisible: true			
			},{
				xtype: 'orderdetaillist', 
				store: 'OrderDetails',
				itemId: 'orderDetail',
				localFilter: true,
				width: '100%',
				flex: 2,
				deleteButtonVisible: false
			}
		];
		
		this.callParent();
	},

	// override initEvents
	initEvents: function() {
		this.callParent();
		var orderHeaderSm = this.getComponent('orderHeader').getSelectionModel();
		orderHeaderSm.on('selectionchange', this.onRowSelect, this);
	},

	/**
	 * Handler for selectionchange event.
	 **/
	onRowSelect: function(sm, rs, eOpts) {
		var orderDetailGrid = this.getComponent('orderDetail'),
			operation,
			callback,
			resp;
		
		if(rs.length){
			callback = function(response) {
				resp = Ext.JSON.decode(response.responseText);
				orderDetailGrid.getView().getStore().loadData(resp.orderdetails);
			}

			requestId = rs[0].get("id");
			Ext.Ajax.request({
				method: 'GET',
				params: {request_id: requestId, filter: Ext.JSON.encode([{property: 'request_id', value: requestId}])},
				success: callback,
				url: orderDetailGrid.getStore().getProxy().api.read
			})
		}
	}
});
