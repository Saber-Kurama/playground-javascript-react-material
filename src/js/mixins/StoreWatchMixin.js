/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');

var StoreWatchMixin = function (callback) {
	return {
		getInitialState : function  () {
			return callback(this);
		},
		componentWillMount:function(){
			AppStore.addChangeListener(this._onChange);
		},
		componentWillUnmount:function(){
			AppStore.removeChangeListener(this._onChange);
		},
		_onChange:function  () {
			this.setState(callback(this));
		}
	};
};
module.exports = StoreWatchMixin;