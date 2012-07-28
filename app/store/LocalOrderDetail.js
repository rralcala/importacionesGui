/**
 * Defines the OrderDetail local store. It is used for saving locally the
 * items that are going to be included in a new order.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.LocalOrderDetail', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.OrderDetail',
    
    batchUpdateMode : 'complete',

	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			root: 'orderdetails'
		}
	}
});
