/**
 * Defines the LocalOrder store which holds orders header information
 * about the order to be created.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.LocalOrder', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.Order',
    
	proxy: {
		type: 'ajax',
		
		reader: {
			type: 'json',
			root: 'orders'
		}
	}
});
