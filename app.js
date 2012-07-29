Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux');
Ext.application({
    name: 'IMP',
    
    appFolder: 'app',
    
    controllers: [
		'Login',
		'Users',
		'Navigation',
		'Indicators',
		'Orders'
    ],
      
    launch: function() {
		IMP.App = this;
		
		IMP.loadingMask = function(){
			
			var mask = Ext.LoadMask(
					Ext.getBody(), 
					{msg: "Please wait..."}
				);
			
			return mask;
		}();
		
		IMP.getErrorMsg = function(errorcode){
			return IMP.errors.get(errorcode);
		}

		this.setupLanguage();

		Ext.create('IMP.view.Viewport');
        
    },
    
    /**
     * Setup the language based on the chosen language.
     **/
    setupLanguage: function() {
		var locale = Ext.util.Cookies.get("IMP-LANG") != null ? Ext.util.Cookies.get("IMP-LANG") : 'en',
			head = document.getElementsByTagName("head")[0];
		

		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = 'extjs/locale/ext-lang-' + locale + '.js';
		head.appendChild(script);
		
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = 'locale/errors-' + locale + '.js'
		head.appendChild(script);
	}
});
