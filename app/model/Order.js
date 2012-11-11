/**
 * Defines the Order model which represents order information
 * 
 * @author: Roberto Rodriguez Alcala <rralcala@gmail.com>
 **/

Ext.define('IMP.model.Order', {
    extend: 'Ext.data.Model',
    
    fields: [
		{name: 'id', type: 'int', displayColumn: false},
		{name: 'Date', type: 'date', displayColumn: true},
		{name: 'P1Start', type: 'date', displayColumn: true},
		{name: 'P2Start', type: 'date', displayColumn: true},
		{name: 'P1End', type: 'date', displayColumn: true},
		{name: 'P2End', type: 'date', displayColumn: true},
		{name: 'Description', type: 'string', displayColumn: true},
		{name: 'Enabled', type: 'auto', displayColumn: false}
		

	]
});
