/**
 * Defines the Lines store.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.Lines', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.List',
    
    autoLoad: true,
    
    autoSync: true,
    
    loadMask: true,
    
	proxy: {
		type: 'ajax',
		
		api: {
			read: Conf.serverUrl + 'item/jgetlines'
		},
		
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success'
		}
	}
 
});
