/**
 * Defines the OrderDetailList grid panel which shows order details UI.
 * It contains the orders details.
 * 
 * The store can be a LocalOrderDetail which means that the order is
 * going to be created or OrderDetail otherwise.
 * 
@author: Roberto Rodriguez Alcala <rralcala@gmail.com>
 **/
 var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    });
Ext.define('IMP.view.order.OrderDetailList', {
	extend: 'Ext.grid.Panel',

    requires: [
	    'Ext.selection.CellModel',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.ux.CheckColumn',
        'Ext.ux.grid.FiltersFeature'
    ],
    
    loadMask: true,
    
    viewConfig: {
        trackOver: false
    },
	
	alias: 'widget.orderdetaillist',
	
	id: 'orderdetaillist',
	
	autoScroll: true,
	
	config: {
		withPagingToolbar: true,
		deleteButtonVisible: false,
		localFilter: false
	},
	
	constructor: function(config) {
		this.initConfig(config);
		this.callParent(arguments);
	},
	plugins: [cellEditing],
	initComponent: function() {
		var labels = Conf.labelsText.order.OrderList,
			indicatorLabels = Conf.labelsText.indicator.List,
			labelsHeader = Conf.labelsText.order.BasicList,
			me = this;
		
        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: function(){
					var it = [];
					if(me.deleteButtonVisible){
						it.push({
							iconCls: 'icon-delete',
							text: labels.deleteButtonText,
							action: 'deleteItem',
							id: 'delete-item',
							disabled: true
						});
					}
					
					it.push({
							iconCls: 'icon-clear',
							text: labels.clearFiltersButtonText,
							action: 'clearFilters',
							listId: 'orderdetaillist'
					});
					return it;
				}()
            }
        ];

        /*if(me.withPagingToolbar){
			this.dockedItems.push({
				xtype: 'pagingtoolbar',
				store: me.getStore(),   // same store GridPanel is using
				dock: 'bottom',
				pageSize: Conf.pageSize,
				displayInfo: true
			});
		}*/

        var store = IMP.App.getStore("Brands");
        
        var filters = {
            ftype: 'filters',
            encode: true, // json encode the filter query
            local: me.localFilter, // local or remote filtering,
			filters: [
				{
					type: 'customlist', 
					options: store.collect("value", false), 
					dataIndex: 'Brand',
					validateRecord : function (record) { //override the validateRecord in order to be able to filter locally by Item properties.
						var valuesArray = this.getValue();
						return Ext.Array.indexOf(valuesArray, record.get("item")[this.dataIndex]) > -1;
					}
				},{
					type: 'string', 
					dataIndex: 'Code',
					validateRecord : function (record) {
						var valuesArray = this.getValue();
						return Ext.Array.indexOf(valuesArray, record.get("item")[this.dataIndex]) > -1;
					}
				}
			],
        }; 
        
        this.features = [filters];
        
    
	    this.columns = [{xtype: 'rownumberer',width: 50, sortable: false},
            {   
                header: indicatorLabels.familyHeader,  
                dataIndex: 'Line',
                width: 80,
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
                    return record.get("Line");//["Line"];
                }
            },{
                header: indicatorLabels.codeHeader,  
                dataIndex: 'Code',
                width: 80,
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
                    return record.get("Code");//[""];
                }
            },{
                header: indicatorLabels.nameHeader, 
                dataIndex: 'itemName',
                menuDisabled: true,
                width: 100,
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
                    return record.get("itemName");//[""];
                }
            },
        ];

        //var fields = IMP.model.OrderDetail.prototype.fields.items;
	        var fields = [
                      /*'estimation1', 'weight1', 'estimation2', 'weight2','estimation3', 'weight3',*/
                      'estimatedSales','currentStock','pendingStock','desiredStock','ShipTime',
                      'StockTime','suggestedQty'
                  ];	
        for(i = 0; i < fields.length; i++){
            var e = fields[i];
	//			,dc = fields[i].displayColumn
            
          //  if(dc)
	    
		this.columns.push({
					header: labelsHeader[e + 'Header'],
					dataIndex: e,
					xtype: 'numbercolumn',
					format: '0.00',
					width: 60,
					menuDisabled: true
					
				});
			
        }        
		this.columns.push({
					header: labelsHeader['desiredStockTimeHeader'],
					dataIndex: 'desiredStockTime',
					xtype: 'numbercolumn',
					format: '0.00',
					width: 80,
					menuDisabled: true,
					editor: {
						xtype: 'numberfield',
						allowBlank: false,
						minValue: 0,
						maxValue: 100000
					}
				})
		this.columns.push({
					header: labelsHeader['ManualQtyHeader'],
					dataIndex: 'ManualQty',
					xtype: 'numbercolumn',
					format: '0.00',
					width: 80,
					menuDisabled: true,
					editor: {
						xtype: 'numberfield',
						allowBlank: false,
						minValue: 0,
						maxValue: 100000
					}
				});
						this.columns.push({
					header: labelsHeader['priceHeader'],
					dataIndex: 'price',
					xtype: 'numbercolumn',
					format: '0.00',
					width: 80,
					menuDisabled: true
					
				});
				this.columns.push({
					header: labelsHeader['orderTotalHeader'],
					dataIndex: 'orderTotal',
					xtype: 'numbercolumn',
					format: '0.00',
					width: 80,
					menuDisabled: true
					
				});
		''
		
		this.selModel = Ext.create('Ext.selection.CheckboxModel', {
			listeners: {
				selectionchange: {fn: this.onSelectChange, scope: this}
			}
		});
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
    
    onSelectChange: function(selModel, selections){
        this.down('#delete-item').setDisabled(selections.length === 0);
    }
});
