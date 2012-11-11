
/**
 * Defines the forms which contains orders HEADER information.
 * 
 * @author: Roberto Rodriguez Alcala <rralcala@gmail.com>
 **/
var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

var date=new Date();

Ext.define('IMP.view.order.List', {
	extend: 'Ext.form.Panel',

    /*requires: [
        'Ext.ux.grid.FiltersFeature'
    ],*/
    
    viewConfig: {
        trackOver: false
    },	
	
	alias: 'widget.orderlist',
	
	//store: 'Orders', //order header store.
	
	id: 'orderlist',
	
	//isLocalStore: false, // Indicates if the store syncs with the server. Default to false.
	
	//xtype: 'form',
    //id: 'orderlistForm',
    //collapsible: true,
    url: 'save-form.php',
    frame: true,
    //title: 'Create new purchase order',
    bodyPadding: '5 5 0',
        
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85
    },
    defaults: {
        anchor: '100%'
    },
		
	initComponent: function() {
	
	var labels = Conf.labelsText.order.BasicList;
	
	this.buttons = [{
            text: labels.applyDates,
			action: 'applyParams',
            handler: function() {
                this.up('form').getForm().isValid();
            }
        },{
            text: labels.cancel,
            handler: function() {
                this.up('form').getForm().reset();
            }
			
			
        },{
            text: 'Guardar',
			disabled: true,
			id: 'btSave'
            }];
	this.items = [
		{
			xtype: 'container',
            anchor: '100%',
            layout: 'hbox',
			
            items:[
			
			{   // column #1
				xtype: 'container',
                flex: 1,
				name: 'row1',
                layout: 'anchor',
				items: [
					{
						fieldLabel: labels.period1Start,
						name: 'p1start',
						id:  'p1start',
						value: Ext.Date.add(date, Ext.Date.YEAR, -1),
						xtype: 'datefield',
						labelWidth: 100
					},{
						fieldLabel: labels.period2Start,
						value: Ext.Date.add(date, Ext.Date.MONTH, -3),
						name: 'p2start',
						id:  'p2start',
						xtype: 'datefield',
						labelWidth: 100
					}
					]
			},{   // column #2
					             xtype: 'container',
                flex: 1,
                layout: 'anchor',
					items: [{
						fieldLabel: labels.period1End,
						value: date,
						name: 'p1end',
						id:  'p1end',
						xtype: 'datefield'
					}, {
						fieldLabel: labels.period2End,
						value: date,
						name: 'p2end',
						id:  'p2end',
						xtype: 'datefield'
					}] 
			},{   // column #3
				xtype: 'container',
                flex: 1,
                layout: 'anchor',
					items: [{
						xtype: 'textfield',
						name: 'description',
						id: 'txDescription',
						fieldLabel: 'Descripcion',
						allowBlank: false,
						maxLength: 100,
						width: '200px'
					}] 
			}]
		}];
	this.callParent(arguments);
	
        
        /*var fields = IMP.model.Order.prototype.fields.items;
       // this.columns = [];
        
        var columnsGen = function(f){
			var o = {
				header: labelsHeader[f.name + 'Header'],
				dataIndex: f.name,
				xtype: 'numbercolumn',
				format: '0.00',
				width: 150
				//menuDisabled: true
			};
			if(f.type.type == 'date'){
				o.xtype = 'datecolumn';
				o.editor = {
					xtype: 'datefield', 
					allowBlank: false,
					format: Conf.dateFormat
				};
				o.format = Conf.dateFormat;
			}
			return o
		};*/
		
        /*for(i = 1; i < fields.length; i++){
            var dc = fields[i].displayColumn;
            if(dc){
		//		this.columns.push(columnsGen(fields[i]));
			}
        }
        */
        
       
        
        
        
	}
});
