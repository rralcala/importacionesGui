/**
 * Indicators Controller.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.controller.Indicators', {
    extend: 'Ext.app.Controller',

    views: [
        'indicator.List'
    ],
    
    stores: [
        'Brands', 'Branches', 'Countries', 'ArtTypes', 'Lines',
        'Items',
        'ItemStatistics'
    ],
    
    models: [
        'List',
        'Item',
        'ItemStatistics'
    ],

    init: function() {
        this.control({
            'indicatorlist button[action=refresh]': {
                click: this.onRefreshClicked
            },
            'indicatorlist button[action=clearFilters]': {
                click: this.onClearFiltersClicked
            }
        });
    },
    
    /**
     * Shows the grid with statistical information of items.
     **/
    showIndicatorList: function() {
        var view = Ext.create("widget.indicatorlist"),
            contentRegion = Ext.getCmp('contentRegion');
        
        //view.getStore().guaranteeRange(0, Conf.pageSize - 1);
        contentRegion.add(view);
    },

    /**
     * Reloads the store.
     **/
    onRefreshClicked: function(button){
        var grid = Ext.getCmp("indicatorlist");
        grid.getStore().guaranteeRange(0, Conf.pageSize - 1);
        grid.getView().scrollToTop();
    },
    
    
    /**
     * Clears filters data
     **/
    onClearFiltersClicked: function(button){
        Ext.getCmp("indicatorlist").filters.clearFilters();
    }
});
