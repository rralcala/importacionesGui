/**
 * Defines the grid wich shows item's statistics.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.view.indicator.List' ,{
    extend: 'Ext.grid.Panel',
    
    requires: [
        'Ext.ux.grid.FiltersFeature',
        'Ext.form.*'
    ],
    
    alias : 'widget.indicatorlist',
    
    id: 'indicatorlist',
    
    store: 'ItemStatistics',
    
    //verticalScrollerType: 'paginggridscroller',

    loadMask: true,
    
    //invalidateScrollerOnRefresh: false,

    viewConfig: {
        trackOver: false
    },
    
    //selType: 'cellmodel',
    
    //disableSelection: false,
    
    initComponent: function() {
        var labels = Conf.labelsText.indicator.List
            me = this;
        
        this.title = labels.userListTitle;
        
		var store = IMP.App.getStore("Brands");
		
        var filters = {
            ftype: 'filters',
            encode: true, // json encode the filter query
            local: false, // remote filtering
			filters: [
				{
					type: 'customlist', 
					options: store.collect("value", false), 
					dataIndex: 'Brand'
				},{
					type: 'string', 
					dataIndex: 'Code'
				}
			]
        }; 
        
        this.features = [filters];
        
        /* testing cell editing
        this.plugins = [
			Ext.create('Ext.grid.plugin.CellEditing', {
				clicksToEdit: 1
				,listeners: {
					beforeedit: function(editor, e , o){
						alert(Ext.JSON.encode(editor[0]));
					}
				}
			})
		];*/
		
        
            
        this.columns = [{xtype: 'rownumberer',width: 50, sortable: false},
            {   
                header: labels.brandHeader,  
                dataIndex: 'Brand',
                width: 80,
                /*filter: {
                    //type: 'combo',
                    //displayField: 'value',
                    //valueField: 'value',
                    //store: store
                    type: 'customlist',
                    options: store.collect("value", false)
                },*/
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
                    return record.get("item")["Brand"];
                }
            },{
                header: labels.codeHeader,  
                dataIndex: 'Code',
                width: 80,
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
                    return record.get("item")["Code"];
                }
            },{
                header: labels.nameHeader, 
                dataIndex: 'Name',
                menuDisabled: true,
                width: 200,
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
                    return record.get("item")["Name"];
                }
            },
        ];
        
        var fields = [
            'period', 'mean', 'stdDev', 'meanDev', 'periodMean',
            'periodStdDev', 'periodMeanDev', 'lastSales', 'lastStockBreak',
            'meanWithinSales', 'maxSalesMonth', 'trend', 'trend2', 'trend3',
            'trendMean', 'trendStdDev', 'trendStdDevX3', 'totalPeriod',
        ];
        
        for(i = 0; i < fields.length; i++){
            var e = fields[i];
            this.columns.push({
                header: labels[e + 'Header'],
                dataIndex: e,
                xtype: 'numbercolumn',
                format: '0.00',
                width: 120,
            });
        }


        var gridStore = IMP.App.getStore("ItemStatistics");
        gridStore.getProxy().extraParams['command'] = 'Boo';
        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
                    {
                        iconCls: 'x-tbar-loading',
                        text: labels.refreshButtonText,
                        action: 'refresh',
                        id: 'refresh'
                    },{
                        iconCls: 'icon-clear',
                        text: labels.clearFiltersButtonText,
                        action: 'clearFilters',
                        id: 'filterButton'
                    },
                    {
                        xtype: 'datefield',
                        format: 'Y-m-d',
                        value: new Date(),
                        //minDate: new Date(),
                        id: 'period1FromDate',
                        handler: function(picker, date) {
                        
                    	}

                    },
                    {
                        xtype: 'datefield',
                        format: 'Y-m-d',
                        value: new Date(),
                        //minDate: new Date(),
                        id: 'period1ToDate',
                        handler: function(picker, date) {
                        
                    	}

                    }
                ]
            }, {
                xtype: 'pagingtoolbar',
                store: gridStore,   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }
        ];

        this.callParent(arguments);
    }
});
