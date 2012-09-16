/**
 * Defines the Items store.
 * 
 * @author: Roberto Rodriguez <rralcala@gmail.com>
 **/

Ext.define('IMP.store.Items', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.Item',
    
    autoLoad: true,
    
    autoSync: true,
    
    pageSize: Conf.pageSize,
    
    buffered: true,
    
    loadMask: true,
    
	proxy: {
		type: 'ajax',
		
		api: {
			read: Conf.serverUrl + 'item/list',
			update: Conf.serverUrl + 'item/jsonupdate',
			create: Conf.serverUrl + 'item/jsoncreate',
			destroy: Conf.serverUrl + 'item/jsondelete'
		},
		
		reader: {
			type: 'json',
			root: 'items',
			successProperty: 'success',
			totalProperty: 'totalCount'
		}
	}
 
});
