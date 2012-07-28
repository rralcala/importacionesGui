/**
 * Defines the Users store.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.Users', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.User',
    
    autoLoad: true,
    
    autoSync: true,
    
    pageSize: Conf.pageSize,
    
    buffered: true,
    
   
    loadMask: true,

	proxy: {
		type: 'ajax',
		
		api: {
			read: Conf.serverUrl + 'users/list',
			update: Conf.serverUrl + 'users/jsonupdate',
			create: Conf.serverUrl + 'users/jsoncreate',
			destroy: Conf.serverUrl + 'users/jsondelete'
		},
		
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success',
			totalProperty: 'totalCount'
		}
	}
 
});
