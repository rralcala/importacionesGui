/**
 * Defines labels text regarding to the chosen language
 * 
 * Language: Spanish
 * 
 * @author: Jorge Ramírez <jorgeramirez1990@gmail.com>
 **/

Conf.labelsText = {};

Conf.labelsText.LoginForm = function() {
	return {
		langFieldSetTitle: 'Opciones de Idiomas',
		comboEmptyText: 'Seleccione un idioma...',
		loginFieldSetTitle: 'Informaci\u00F3n de Inicio de Sesi\u00F3n',
		usernameFieldLabel: 'Nombre de Usuario',
		passwordFieldLabel: 'Contrase\u00F1a',
		localeFailureMsg: 'Error al cargar el archivo de idiomas',
		englishLang: 'Ingl\u00E9s',
		spanishLang: 'Espa\u00F1ol',
		loginButtonText: 'Entrar'
	}
}();


Conf.labelsText.Viewport = function() {
	return {
		navigationTitle: 'Navegaci\u00F3n'
	}
}();


Conf.labelsText.NavigationTree = function() {
	return {
		ordersText: 'Pedidos',
		indicatorsText: 'Indicadores',
		createOrderText: 'Crear Pedido',
		listOrderText: 'Listar',
		cashFlowText: 'Flujo de Caja',
		systemText: 'Sistema',
		userCrudText: 'CRUD de Usuarios',
		logoutText: 'Finalizar Sesi\u00F3n'
	}
}();


Conf.labelsText.user = {};

Conf.labelsText.user.List = function() {
	return {
		userListTitle: 'Usuarios',
		nameHeader: 'Nombre',
		emailHeader: 'Correo Electr\u00F3nico',
		usernameHeader: 'Nombre de Usuario',
		addButtonText: 'Crear',
		deleteButtonText: 'Eliminar',
		refreshButtonText: 'Refrescar',
		clearFiltersButtonText: 'Eliminar Filtros'
	}
}();


Conf.labelsText.user.BasicForm = function() {
	return {
		usernameFieldLabel: 'Nombre de Usuario',
		passwordFieldLabel: 'Contrase\u00F1a',
		passwordRepeatFieldLabel: 'Repita Contrase\u00F1a',
		nameFieldLabel: 'Nombre',
		emailFieldLabel: 'Correo Electr\u00F3nico',
		usernameInvalidText: "Su nombre de usuario debe empezar con una letra y no debe exceder 32 caracteres de longitud",
		usernameExistMsg: "El nombre de usuario ya existe",
		passwordInvalidText: "El password debe tener entre 5 y 32 caracteres de longitud",
		passConfMsg: "Confirmaci\u00F3n de contrase\u00F1a incorrecta",
		emailInvalidText: "La Direcci\u00F3n de Correo no puede exceder 64 caracteres de longitud",
		nameInvalidText: 'Nombre invalido. No puede exceder 64 caracteres de longitud'
	}
}();


Conf.labelsText.user.Edit = function() {
	return {
		title: 'Editar Usuario',
		saveButtonText: 'Guardar',
		cancelButtonText: 'Cancelar',
	}
}();


Conf.labelsText.user.Create = function() {
	return {
		title: 'Crear Usuario',
		createButtonText: 'Crear',
		cancelButtonText: 'Cancelar',
	}
}();


Conf.labelsText.indicator = {};

Conf.labelsText.indicator.List = {
	periodHeader: 'Periodo',
	meanHeader: 'Media Total', 
	stdDevHeader: 'Desv STD', 
	meanDevHeader: 'Desv Media', 
	periodMeanHeader: 'Media del Periodo',
	periodStdDevHeader: 'Desv STD Periodo', 
	periodMeanDevHeader: 'Desv Media del Periodo', 
	lastSalesHeader: '\u00daltimas Ventas', 
	lastStockBreakHeader: '\u00daltimo Corte de Stock',
	meanWithinSalesHeader: 'Media con Ventas', 
	maxSalesMonthHeader: 'Max Ventas Mes', 
	trendHeader: 'Tendencia a Sgte', 
	trend2Header: 'Tendencia a 2 Sgte', 
	trend3Header: 'Tendencia a 3 Sgte',
	trendMeanHeader: 'Media de Tendencias', 
	trendStdDevHeader: 'Desv STD Tendencia', 
	trendStdDevX3Header: 'Trend Std Dev X3', 
	totalPeriodHeader: 'Periodo Total',
	brandHeader: 'Familia',
	codeHeader: 'C\u00F3digo',
	nameHeader: 'Descripci\u00F3n',
	refreshButtonText: 'Refrescar',
	clearFiltersButtonText: 'Eliminar Filtros'
};


Conf.labelsText.order = {};

Conf.labelsText.order.OrderCreatedMsg = "The Order have been created";

Conf.labelsText.order.BasicList = {
	weightHeader: 'Weight',
	weight2Header: 'Weight 2',
	weight3Header: 'Weight 3',
	estimatedSalesHeader: 'Estimated Sales',
	stockHeader: 'Stock',
	inputHeader: 'Input',
	desiredStockTimeHeader: 'Desired Stock Time',
	shippingTimeHeader: 'Shipping Time',
	estimatedStockTimeHeader: 'Estimated Stock Time',
	desiredStockHeader: 'Desired Stock',
	desiredStockBasedOnHeader: 'Desired Stock Based On',
	orderHeader: 'Order',
	provPriceHeader:'Prov Price',
	totalOrderHeader: 'Total Order Header',
	orderEstimatedHeader: 'Order Estimated',
	manualOrderHeader: 'Manual Order',
	totalEstimatedOrderHeader: 'Total Estimated Order',
	totalManualOrderHeader: 'Total Manual Order',
	dateHeader: 'Date',
	DateHeader: 'Date',
	PeriodStartHeader: 'Period Start',
	PeriodEndHeader: 'Period End',
	SubPeriodHeader: 'SubPeriod',
	StockTimeHeader: 'Stock Time',
	ShipTimeHeader: 'Ship Time',
	ManualQtyHeader: 'Manual Quantity'
};

Conf.labelsText.order.ItemList = {
	brandHeader: 'Brand',
	codeHeader: 'Code',
	nameHeader: 'Description',
	clearFiltersButtonText: 'Clear Filters',
	unitHeader: 'Unit',
	unit2Header: 'Unit 2',
	branchHeader: 'Branch',
	lineHeader: 'Line',
	countryHeader: 'Country',
	artTypeHeader: 'Art. Type',
	addButtonText: 'Add'
};

Conf.labelsText.order.OrderList = {
	clearFiltersButtonText: 'Eliminar Filtros',
	addButtonText: 'Agregar',
	deleteButtonText: 'Eliminar',
	createButtonText: 'Crear Pedido'
};

