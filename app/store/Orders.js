/**
 * Defines the Orders store.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.Orders', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.Order',
    
    autoLoad: true,  ///uncomment after orders controller implementation is done.
    
    autoSync: true,
    
    pageSize: Conf.pageSize,
    
    buffered: true,
    
    loadMask: true,

	proxy: {
		type: 'ajax',
		
		api: {
			read: Conf.serverUrl + 'request/list',
			update: Conf.serverUrl + 'request/jsonupdate',
			create: Conf.serverUrl + 'request/jsoncreate',
			destroy: Conf.serverUrl + 'request/jsondelete'
		},
		
		reader: {
			type: 'json',
			root: 'orders',
			successProperty: 'success',
			totalProperty: 'totalCount'
		}
	}
});
