/**
 * Defines the ItemStatistics store.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.store.ItemStatistics', {
    extend: 'Ext.data.Store',
    
    model: 'IMP.model.ItemStatistics',
    
    autoLoad: true,
    
    autoSync: true,
    
    pageSize: Conf.pageSize,
    
    buffered: true,
    
    loadMask: true,

        proxy: {
                type: 'ajax',
                extraParams: { p1start: 'json' , p2start: 'hi', p1end: '', p2end: '' },
                api: {
                        read: Conf.serverUrl + 'statistics/list',
                        //update: Conf.serverUrl + 'statistics/jsonupdate',
                        //create: Conf.serverUrl + 'itestatisticsms/jsoncreate',
                        //destroy: Conf.serverUrl + 'itestatisticsms/jsondelete'
                },
                
                reader: {
                        type: 'json',
                        root: 'statistics',
                        successProperty: 'success',
                        totalProperty: 'totalCount'
                }
        }
 
});
