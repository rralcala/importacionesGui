/**
 * Orders Controller.
 * 
 * @author: Roberto Rodriguez Alcala <rralcala@gmail.com>
 **/

Ext.define('IMP.controller.Orders', {
    extend: 'Ext.app.Controller',

    views: [
		'order.OrderDetailList',
		'order.ItemList',
		'order.List',
		'order.OrderListGui',
		'order.CreateOrderGui',
		'order.OrderHeaderNav'
    ],
    
    stores: [
		'Items',
		'Orders',
		'OrderDetails',
		'LocalOrder',
		'LocalOrderDetail',
		'SavedOrderDetails'
    ],
    
    models: [
		'Item',
		'Order',
		'OrderDetail'
    ],

    init: function() {
		this.control({
            'itemlist button[action=clearFilters]': {
                click: this.onClearFiltersClicked
            },
            'orderdetaillist button[action=clearFilters]': {
                click: this.onClearFiltersClicked
            },
            'orderlist button[action=clearFilters]': {
                click: this.onClearFiltersClicked
            },
            'itemlist button[action=addItem]': {
                click: this.onAddItemClicked
            },
            'orderdetaillist button[action=deleteItem]': {
                click: this.onDeleteOrderDetailClicked
            },
			'orderdetaillist': {
                edit: this.onGridEdit
            },
            'orderlist button[id=btSave]': {
				click: this.onCreateOrderClicked
			},
			'orderlist button[action=applyParams]': {
				click: this.onApplyParamsClicked
			},
			'orderheadernav': {
				selectionchange: this.orderheadernavOnSelectionChange
			}  
		});
		//alert(Ext.getCmp('orderlist').items[0]);
	},


    /**
     * show the orders UI. It can be the Create Order GUI or the
     * List Order GUI.
     **/
    show: function(widget) {
		var contentRegion = Ext.getCmp('contentRegion');
		contentRegion.add(Ext.widget(widget));
	},

	
	/**
	 * Calculates fields after a manual modification.
	 */
	onGridEdit: function(editor, e) {
	e.record.set('orderTotal', e.record.data.price * e.record.data.ManualQty);
		//e.record.data.orderTotal = ;
    },
	
    /**
     * Clears filters data
     **/
    onClearFiltersClicked: function(button) {
        Ext.getCmp(button.listId).filters.clearFilters();
    },

	/**
	 * Handler that is fired when the Add button in the item list is
	 * clicked.
	 **/
	onAddItemClicked: function(button) {
		var grid = button.up("itemlist"),
			items = grid.getView().getSelectionModel().getSelection(),
			odStore = this.getStore('LocalOrderDetail'),
			detail,
			details = [],
			i, j, exist = false;
		
	
		for(i = 0; i < items.length; i++){
		
			for(j = 0; j < odStore.count(); j++){ //check if it is already selected.
				exist = odStore.getAt(j).get("item").Code == items[i].raw.Code;
				if(exist){
					break;
				}
			}
			if(!exist){
				var detail = Ext.create('IMP.model.OrderDetail');
				 detail.data = Ext.clone(items[i].data); 
				 detail.raw = Ext.clone(items[i].raw); 
				details.push(detail);
			}
		}

		if(details.length > 0){
			odStore.add(details);		
		}
		if(odStore.count() > 0)
		{
		
			Ext.getCmp('btSave').setDisabled(false);
		
		}
		grid.getView().getSelectionModel().deselectAll();
		Ext.getCmp('orderdetaillist').filters.clearFilters();
		//this.disableCreateOrderButton(odStore);
	},

	
	orderheadernavOnSelectionChange: function( grid, element, eOpts )
	{
		//console.log(element[0].data.id);
		var store = IMP.App.getStore('SavedOrderDetails');
		//store.loadData([],false);
		store.load({
				  params: {id: element[0].data.id},
		callback: function(records, operation, success) {
	        // the operation object
	        // contains all of the details of the load operation
			Ext.getCmp('orderdetaillist').getStore().loadRecords(records,{addRecords: false});
	    }		
		});
	},
	/**
	 * Handler that is fired when the Delete button in the order details 
	 * list is clicked.
	 **/	
	onDeleteOrderDetailClicked: function(button){
		var grid = button.up("orderdetaillist"),
			details = grid.getView().getSelectionModel().getSelection(),
			odStore = this.getStore('LocalOrderDetail');
		
		grid.getView().getSelectionModel().deselectAll();
		for(var i = 0, j = Conf.pageSize; i < details.length; i = j , j += Conf.pageSize){
			if(j > details.length){
				j = details.length;
			}
			odStore.remove(details.slice(i, j));
		}
		if(odStore.count() === 0)
		{
		
			Ext.getCmp('btSave').setDisabled(true);
		
		}
	},
	
	
	
	/**
	 * Handler that is fired when the Create Order button is clicked.
	 **/
	onApplyParamsClicked: function(button){
		orderDetailProxy = IMP.App.getStore('OrderDetails').getProxy();
		orderDetailProxy.extraParams['p1start'] = Ext.Date.format(Ext.Date.parse(button.up('orderlist').getValues(false).p1start, 'm/d/y'),'Y-m-d');
		orderDetailProxy.extraParams['p2start'] = Ext.Date.format(Ext.Date.parse(button.up('orderlist').getValues(false).p2start, 'm/d/y'),'Y-m-d');
		orderDetailProxy.extraParams['p1end'] = Ext.Date.format(Ext.Date.parse(button.up('orderlist').getValues(false).p1end, 'm/d/y'),'Y-m-d');
		orderDetailProxy.extraParams['p2end'] = Ext.Date.format(Ext.Date.parse(button.up('orderlist').getValues(false).p2end, 'm/d/y'),'Y-m-d');
		IMP.App.getStore('OrderDetails').load();
	},
	
	/**
	 * Handler that is fired when the Create Order button is clicked.
	 **/
	onCreateOrderClicked: function(button){
		var orderDetailGrid = Ext.getCmp("orderdetaillist");
		
		var header;
		var orderStore = IMP.App.getStore('Orders');
		var details = [];
		

		header = { P1Start: Ext.Date.format(Ext.getCmp('p1start').value, 'Y-m-d'),
					P1End: Ext.Date.format(Ext.getCmp('p1end').value, 'Y-m-d'),
					P2Start: Ext.Date.format(Ext.getCmp('p2start').value, 'Y-m-d'),		
					P2End:  Ext.Date.format(Ext.getCmp('p2end').value, 'Y-m-d'),
					Description: Ext.getCmp('txDescription').value
		};
		
		orderDetailGrid.getView().getStore().data.each(function(item, index, length){
			details.push(item.data);
		});
	//	newOrder.fields.each(function(item, index, length){
		var newOrder = [header, details];
		//});
		//newOrder.set(item.name, values.get(item.name));

		
		Ext.Ajax.request({ // creates the header
			method: "POST",
			url: orderStore.getProxy().api.create,
			jsonData: newOrder,
			success: function(response){
						var resp = Ext.JSON.decode(response.responseText);
						//Ext.Ajax.request({ // creates the details
						//	method: 'POST',
						//	url: orderDetailStore.getProxy().api.create,
						//	jsonData: {details: details, request_id: resp.request_id},
							
						Ext.Msg.show({
							title:'OK',
							msg: Conf.labelsText.order.OrderCreatedMsg,
							buttons: Ext.Msg.OK,
							icon: Ext.Msg.INFO,
							fn: function(buttonId, text, opt) {
								if(buttonId == 'ok'){
									window.location.reload();
								}
							}
						});
					}
		});
	}
});
