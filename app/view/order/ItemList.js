/**
 * Defines the grid wich shows items.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.view.order.ItemList' ,{
    extend: 'Ext.grid.Panel',
    
    requires: [
        'Ext.ux.grid.FiltersFeature'
    ],
    
    alias : 'widget.itemlist',
    
    id: 'itemlist',
    
    store: 'OrderDetails',
    
    loadMask: true,
    
    viewConfig: {
        trackOver: false
    },
    
    
    initComponent: function() {
        var labels = Conf.labelsText.order.BasicList
            me = this;
        
        this.title = labels.userListTitle;
        
        var brandSt = IMP.App.getStore("Brands"),
			branchSt = IMP.App.getStore("Branches"),
			artTypeSt = IMP.App.getStore("ArtTypes"),
			countrySt = IMP.App.getStore("Countries"),
			lineSt = IMP.App.getStore("Lines");

        var filters = {
            ftype: 'filters',
            encode: true, // json encode the filter query
            local: false, // remote filtering,
			filters: [
				{
					type: 'customlist', 
					options: lineSt.collect("value", false), 
					dataIndex: 'Line'
				},{
					type: 'string', 
					//options: branchSt.collect("value", false), 
					dataIndex: 'Code'
				}/*,{
					type: 'customlist', 
					options: countrySt.collect("value", false), 
					dataIndex: 'Country'
				},{
					type: 'customlist', 
					options: artTypeSt.collect("value", false), 
					dataIndex: 'ArtType'
				}*/
			]            

        }; 
        
        this.features = [filters];
        
        this.columns = [{xtype: 'rownumberer',width: 50, sortable: false},
            {   
                header: labels.familyHeader,  
                dataIndex: 'Line',
                width: 80
            },{
                header: labels.codeHeader,  
                dataIndex: 'Code',
                width: 80
            },{
                header: labels.nameHeader, 
                dataIndex: 'itemName',
                menuDisabled: true,
                width: 100
            }
            
        ];

        var fields = [
                      'estimation1', 'weight1', 'estimation2', 'weight2','estimation3', 'weight3',
                      'estimatedSales','currentStock','pendingStock','desiredStockTime','ShipTime',
                      'StockTime','desiredStock','suggestedQty','ManualQty','price','orderTotal'
                  ];
                  
                  for(i = 0; i < fields.length; i++){
                      var e = fields[i];
                      this.columns.push({
                          header: labels[e + 'Header'],
                          dataIndex: e,
                          xtype: 'numbercolumn',
                          format: '0.00',
                          width: 60,
                      });
                  }
        
        var gridStore = IMP.App.getStore("OrderDetails");
		var date = new Date();

        gridStore.getProxy().extraParams['p1start'] = Ext.Date.format(Ext.Date.add(date, Ext.Date.YEAR, -1), 'Y-m-d');
		gridStore.getProxy().extraParams['p2start'] = Ext.Date.format(Ext.Date.add(date, Ext.Date.Month, -3), 'Y-m-d');
		gridStore.getProxy().extraParams['p1end'] = Ext.Date.format(date, 'Y-m-d');
		gridStore.getProxy().extraParams['p2end'] = Ext.Date.format(date, 'Y-m-d');
		
        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
					{
                        iconCls: 'icon-add',
                        text: labels.addButtonText,
                        action: 'addItem',
                        id: 'add-item',
                        disabled: true
                    },{
                        iconCls: 'icon-clear',
                        text: labels.clearFiltersButtonText,
                        action: 'clearFilters',
                        listId: 'itemlist'
                    }
                ]
            }, {
                xtype: 'pagingtoolbar',
                store: gridStore,   // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }
        ];

		this.selModel = Ext.create('Ext.selection.CheckboxModel', {
			listeners: {
				selectionchange: {fn: this.onSelectChange, scope: this}
			}
		});

        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    
    onSelectChange: function(selModel, selections){
        this.down('#add-item').setDisabled(selections.length === 0);
    }
});
