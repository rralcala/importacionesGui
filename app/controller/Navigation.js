/**
 * Defines the navigation controller of the application
 * 
 * @author: Jorge Ramírez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.controller.Navigation', {
    extend: 'Ext.app.Controller',
    
    views: [
        'nav.NavigationTree'
    ],
    
    stores: [
        'NavigationTreeStore'
    ],
    
    init: function() {
        this.control({});
    },
    
    /**
     * Dispatches the event to the corresponding controller handler.
     * 
     * Parameters:
     *      Ext.view.View this, 
     *      Ext.data.Model record, 
     *      HTMLElement item, 
     *      Number index, 
     *      Ext.EventObject e, 
     *      Object options
     **/
    dispatch: function(view, record, item, index, e, options) {
        var labels = Conf.labelsText.NavigationTree,
            contentRegion = Ext.getCmp('contentRegion');
        
        contentRegion.removeAll();
        
        switch(record.get("text")){
            case labels.logoutText + " | <b><i>" +  Ext.util.Cookies.get("IMP-USERINFO") + "</i></b>":
                IMP.App.getController("Login").logout();
                break;
            case labels.userCrudText:
                IMP.App.getController("Users").listUsers();
                break;
            case labels.indicatorsText:
                IMP.App.getController("Indicators").showIndicatorList();
                break;
            case labels.createOrderText:
				IMP.App.getController("Orders").show('createordergui');
				break;
			case labels.listOrderText:
				IMP.App.getController("Orders").show('orderlistgui');
				break;
        }
    }
});
