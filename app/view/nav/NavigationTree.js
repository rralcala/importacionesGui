/**
 * Defines the Navigation tree of the navigation panel
 * 
 * @author: Jorge Ramírez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.view.nav.NavigationTree', {
	extend: 'Ext.tree.Panel',
	
	bodyStyle: {padding: '15 12 8 8'},
	
	alias : 'widget.navtree',
	
	rootVisible: false,
	
	store: 'NavigationTreeStore',
	
	id: 'navigationtree'
	
});
