var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
//var merge = require('react/lib/merge');
var assign = require('object-assign');

var CHANGE_EVENT = "event";

var _catalog = [
	{ id: 1, title : 'Widget #1', cost : 1 },
	{ id: 2, title : 'Widget #2', cost : 2 },
	{ id: 3, title : 'Widget #3', cost : 3 }
];

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
	debugger;
	if (!item.isInCart){
		item['quantity'] = 1;
		item['isInCart'] = true;
		_cartItems.push(item);
	} else {
		_cartItems.forEach(function  (cartItem,index) {
			if (cardItem.id === item.Id){
				_increaseItem(index);
			}
		});
	}
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