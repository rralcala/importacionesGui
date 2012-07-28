/**
 * Defines labels text regarding to the chosen language
 * 
 * Language: English
 * 
 * @author: Jorge Ramírez <jorgeramirez1990@gmail.com>
 **/


Conf.labelsText = {};


Conf.labelsText.LoginForm = function() {
	return {
		langFieldSetTitle: 'Language Options',
		comboEmptyText: 'Select a language...',
		loginFieldSetTitle: 'Login Information',
		usernameFieldLabel: 'Username',
		passwordFieldLabel: 'Password',
		localeFailureMsg: 'Failed to load locale file.',
		englishLang: 'English',
		spanishLang: 'Spanish',
		loginButtonText: 'Login'
	}
}();


Conf.labelsText.Viewport = function() {
	return {
		navigationTitle: 'Navigation'
	}
}();


Conf.labelsText.NavigationTree = function() {
	return {
		ordersText: 'Orders',
		indicatorsText: 'Indicators',
		createOrderText: 'Create Order',
		listOrderText: 'List',
		cashFlowText: 'Cash Flow',
		systemText: 'System',
		userCrudText: 'Users CRUD',
		logoutText: 'Logout'
	}
}();


Conf.labelsText.user = {};

Conf.labelsText.user.List = function() {
	return {
		userListTitle: 'Users',
		nameHeader: 'Name',
		emailHeader: 'Email',
		usernameHeader: 'Username',
		addButtonText: 'Add',
		deleteButtonText: 'Delete',
		refreshButtonText: 'Refresh',
		clearFiltersButtonText: 'Clear Filters'
	}
}();


Conf.labelsText.user.BasicForm = function() {
	return {
		usernameFieldLabel: 'Username',
		passwordFieldLabel: 'Password',
		passwordRepeatFieldLabel: 'Repeat Password',
		nameFieldLabel: 'Name',
		emailFieldLabel: 'Email',
		usernameInvalidText: "Username must begin with a letter and cannot exceed 32 characters",
		usernameExistMsg: "The username already exist",
		passwordInvalidText: "Password length must be 5 to 32 characters long",
		passConfMsg: "Password confirmation incorrect",
		emailInvalidText: "Email address cannot exceed 64 characters",
		nameInvalidText: 'Name lenght cannot exceed 64 characters'
	}
}();

Conf.labelsText.user.Edit = function() {
	return {
		title: 'Edit User',
		saveButtonText: 'Save',
		cancelButtonText: 'Cancel',
	}
}();


Conf.labelsText.user.Create = function() {
	return {
		title: 'Create User',
		createButtonText: 'Create',
		cancelButtonText: 'Cancel',
	}
}();


Conf.labelsText.indicator = {};

Conf.labelsText.indicator.List = {
	periodHeader: 'Perdiod',
	meanHeader: 'Mean', 
	stdDevHeader: 'Std Dev', 
	meanDevHeader: 'Mean Dev', 
	periodMeanHeader: 'Period Mean',
	periodStdDevHeader: 'Period Std Dev', 
	periodMeanDevHeader: 'Period Mean Dev', 
	lastSalesHeader: 'Last Sales', 
	lastStockBreakHeader: 'Last Stock Break',
	meanWithinSalesHeader: 'Mean Within Sales', 
	maxSalesMonthHeader: 'Max Sales Month', 
	trendHeader: 'Trend', 
	trend2Header: 'Trend 2', 
	trend3Header: 'Trend 3',
	trendMeanHeader: 'Trend Mean', 
	trendStdDevHeader: 'Trend Std Dev', 
	trendStdDevX3Header: 'Trend Std Dev X3', 
	totalPeriodHeader: 'Total Period',
	brandHeader: 'Brand',
	codeHeader: 'Code',
	nameHeader: 'Description',
	refreshButtonText: 'Refresh',
	clearFiltersButtonText: 'Clear Filters'
};


Conf.labelsText.order = {};

Conf.labelsText.order.OrderCreatedMsg = "El pedido se ha creado";

Conf.labelsText.order.BasicList = {
		suggestedQtyHeader: 'Suggested Qty',
		priceHeader: 'Price',
		orderTotalHeader: 'Total',
	weight1Header: 'Weight',
	weight2Header: 'Weight',
	weight3Header: 'Weight',
	familyHeader: 'Line',
	codeHeader: 'Code',
	nameHeader: 'Item Name',
	estimation1Header: 'Period 1',
	estimation2Header: 'Period 2',
	estimation3Header: 'Trend',
	currentStockHeader: 'Stock',
	pendingStockHeader: 'Incoming',
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
	clearFiltersButtonText: 'Clear Filters',
	addButtonText: 'Add',
	deleteButtonText: 'Delete',
	createButtonText: 'Create Order'
};
