/**
 * Defines the Item model.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.model.Item', {
    extend: 'Ext.data.Model',
    
    fields: [
		'id', 'Code', 'Name', 'Brand', 'Unit', 'Unit2',
		'Branch', 'Line', 'Country', 'ArtType'
	]
});
