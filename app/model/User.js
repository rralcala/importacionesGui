/**
 * Defines the User model.
 * 
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

Ext.define('IMP.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
		'id', 'username', 'password', 'name', 'email', 'state',
		'new_password', 'new_password_repeat'
	]
});
