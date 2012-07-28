/**
 * Defines the ArtTypes store.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.ArtTypes', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.List',
    
    autoLoad: true,
    
    autoSync: true,
    
    loadMask: true,
    
	proxy: {
		type: 'ajax',
		
		api: {
			read: Conf.serverUrl + 'item/jgetarttypes'
		},
		
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success'
		}
	}
 
});
