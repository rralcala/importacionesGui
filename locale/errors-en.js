/**
 * Creates error messages hash map object
 **/

Ext.onReady(function(){
	IMP.errors = new Ext.util.HashMap();
	IMP.errors.add('-1', "Login failed. Check your username and password");
});
