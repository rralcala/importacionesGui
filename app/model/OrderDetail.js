/**
 * Defines the OrderDetail model which represents order detail information
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.model.OrderDetail', {
    extend: 'Ext.data.Model',
    
    fields: [
		{name: 'id', type: 'int', displayColumn: false},
		{name: 'request_id', type: 'int', displayColumn: false},
		{name: 'item_id', type: 'int', displayColumn: false},
		{name: 'item', displayColumn: false},
		
		{name: 'Line', displayColumn: true},
		{name: 'Code', displayColumn: true},
		{name: 'itemName', displayColumn: true},
		
		{name: 'StockTime', type: 'float', displayColumn: true},
		{name: 'ShipTime', type: 'float', displayColumn: true},
		{name: 'ManualQty', type: 'float', displayColumn: true},
	{name: 'weight1', type: 'float',displayColumn: true},
	{name: 'estimation1', type: 'float',displayColumn: true},
		{name: 'weight2', type: 'float',displayColumn: true},
		{name: 'estimation2', type: 'float',displayColumn: true},
		{name: 'weight3', type: 'float',displayColumn: true},
		{name: 'estimation3', type: 'float',displayColumn: true},
		{name: 'estimatedSales', type: 'float',displayColumn: true}, 
		{name: 'currentStock', type: 'float',displayColumn: true},
		{name: 'pendingStock', type: 'float',displayColumn: true},
		{name: 'price', type: 'float',displayColumn: true},
		{name: 'suggestedQty', type: 'float',displayColumn: true},
		{name: 'stockBreaksCount', type: 'float',displayColumn: true},
		{name: 'orderTotal', type: 'float',displayColumn: true},
		{name: 'desiredStockTime', type: 'float',displayColumn: true},
		{name: 'desiredStock', type: 'float',displayColumn: true}
			
		
	]
});
