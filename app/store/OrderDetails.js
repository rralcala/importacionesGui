/**
 * Defines the Order Details store.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.OrderDetails', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.OrderDetail',
    
    autoLoad: true, //  uncomment after orders controller implementation is done.
    
    autoSync: true,
    
    pageSize: Conf.pageSize,
    
    buffered: true,
    
    loadMask: true,

	proxy: {
		type: 'ajax',
		
		api: {
			read: Conf.serverUrl + 'requestDetail/list',
			update: Conf.serverUrl + 'requestDetail/jsonupdate',
			create: Conf.serverUrl + 'requestDetail/jsoncreate',
			destroy: Conf.serverUrl + 'requestDetail/jsondelete'
		},
		
		reader: {
			type: 'json',
			root: 'orderDetails',
			successProperty: 'success',
			totalProperty: 'totalCount'
		}
	}
});
