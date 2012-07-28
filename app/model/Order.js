/**
 * Defines the Order model which represents order information
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.model.Order', {
    extend: 'Ext.data.Model',
    
    fields: [
		{name: 'id', type: 'int', displayColumn: false},
		{name: 'Date', type: 'date', displayColumn: true},
		{name: 'PeriodStart', type: 'date', displayColumn: true},
		{name: 'PeriodEnd', type: 'date', displayColumn: true},
		{name: 'SubPeriod', type: 'date', displayColumn: true},
		{name: 'Enabled', type: 'auto', displayColumn: false},
		
		/*{name: 'item', type: 'auto'},
		{name: 'itemStatistics', type: 'auto'},
		{name: 'weight', type: 'float'},
		{name: 'weight2', type: 'float'},
		{name: 'weight3', type: 'float'},
		{name: 'estimatedSales', type: 'float'}, 
		{name: 'stock', type: 'float'},		
		{name: 'input', type: 'float'},
		{name: 'desiredStockTime', type: 'float'}, //to be saved.
		{name: 'shippingTime', type: 'float'},
		{name: 'estimatedStockTime', type: 'float'},
		{name: 'desiredStock', type: 'float'},
		{name: 'desiredStockBasedOn', type: 'float'},
		{name: 'order', type: 'float'},
		{name: 'provPrice', type: 'float'},
		{name: 'totalOrder', type: 'float'},
		{name: 'orderEstimated', type: 'float'},
		{name: 'manualOrder', type: 'float'}, // to be saved.
		{name: 'totalEstimatedOrder', type: 'float'},
		{name: 'totalManualOrder', type: 'float'},
		{name: 'date', type: 'date'}, // to be saved.*/
	]
});
