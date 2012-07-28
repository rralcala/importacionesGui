/**
 * Defines the ItemStatistic model which holds statistic information
 * about a particular item.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.model.ItemStatistics', {
    extend: 'Ext.data.Model',
    
    fields: [
		{name: 'item', type: 'auto'},
		{name: 'period', type: 'float'}, 
		{name: 'mean', type: 'float'}, 
		{name: 'stdDev', type: 'float'},
		{name: 'meanDev', type: 'float'}, 
		{name: 'periodMean', type: 'int'},
		{name: 'periodStdDev', type: 'float'}, 
		{name: 'periodMeanDev', type: 'float'}, 
		{name: 'lastSales', type: 'float'}, 
		{name: 'lastStockBreak', type: 'float'},
		{name: 'meanWithinSales', type: 'float'}, 
		{name: 'maxSalesMonth', type: 'float'}, 
		{name: 'trend', type: 'float'}, 
		{name: 'trend2', type: 'float'}, 
		{name: 'trend3', type: 'float'},
		{name: 'trendMean', type: 'float'}, 
		{name: 'trendStdDev', type: 'float'}, 
		{name: 'trendStdDevX3', type: 'float'}, 
		{name: 'totalPeriod', type: 'float'}
	]
});
