/**
 * Defines the Order Details store.
 * 
 * @author: Roberto Rodriguez Alcala <rralcala@gmail.com>
 **/

Ext.define('IMP.store.SavedOrderDetails', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.OrderDetail',
    
    autoLoad: true, //  uncomment after orders controller implementation is done.
    
    autoSync: true,
    
    pageSize: Conf.pageSize,
    
    buffered: true,
    
    loadMask: true,
    baseParams: {id: '' },
	proxy: {
		type: 'ajax',
		
		api: {
			read: Conf.serverUrl + 'requestDetail/getDetail',

		},
		
		reader: {
			type: 'json',
			root: 'orderDetails',
			successProperty: 'success',
			totalProperty: 'totalCount'
		}
	}
});
