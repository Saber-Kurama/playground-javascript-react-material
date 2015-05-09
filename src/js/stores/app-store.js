var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
//var merge = require('react/lib/merge');
var assign = require('object-assign');

var CHANGE_EVENT = "event";

var _catalog = [];

for(var i=1; i<=9;i++){
	_catalog.push({
		'id' : 'Widget' + i,
		'title' : 'Widget #' + i,
		'summary' : 'This is an awesome widget!',
		'description' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commdi.',
		'cost'  : i
	});
}


var _cartItems = [];

function _removeItem (index) {
	var item = _cartItems[index];
	delete item['quantity'];
	delete item['isInCart'];
	_cartItems.splice(index,1);
}

function _increaseItem (index) {
	_cartItems[index].quantity++;
}

function _decreaseItem (index) {
	if(_cartItems[index].quantity > 1) {
		_cartItems[index].quantity--;
	}else{
		_removeItem(index);
	}
}

function _addItem (item) {
	if (!item.isInCart){
		item['quantity'] = 1;
		item['isInCart'] = true;
		_cartItems.push(item);
	} else {
		_cartItems.forEach(function  (cartItem,index) {
			if (cartItem.id === item.Id){
				_increaseItem(index);
			}
		});
	}
}

function _getCartTotals () {
	var quantity = 0;
	var total = 0;
	_cartItems.forEach(function  (cartItem,index) {
		quantity += cartItem.quantity;
		total += cartItem.cost;
	});
	return {
		'quantity' : quantity,
		'total' : total
	};
}

//var AppStore = merge(EventEmitter.prototype,{
var AppStore = assign({}, EventEmitter.prototype, {
	emitChange : function  () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener : function  (callback) {
		this.on(CHANGE_EVENT,callback);
	},
	removeChangeListener : function  (callback) {
		this.removeListener(CHANGE_EVENT,callback);
	},

	getCart : function  () {
		return _cartItems;
	},
	getCatalog : function  () {
		return _catalog;
	},

	getCartTotals : function  () {
		return _getCartTotals();
	},

	dispatcherIndex : AppDispatcher.register(function  (payload) {
		var action = payload.action;
		switch(action.actionType){
			case AppConstants.ADD_ITEM:
				_addItem(payload.action.item);
			break;
			case AppConstants.REMOVE_ITEM:
				_removeItem(payload.action.index);
			break;
			case AppConstants.INCREASE_ITEM:
				_increaseItem(payload.action.index);
			break;
			case AppConstants.DECREASE_ITEM:
				_decreaseItem(payload.action.index);
			break;
		}
		AppStore.emitChange();
		return true;
	})
});

module.exports = AppStore;