/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToCart = require('./app-addtocart.jsx');


function _getCatalog () {
	return { items:  AppStore.getCatalog() };
}

var Catalog = React.createClass({
	getInitialState : function  () {
		return _getCatalog();
	},
	render:function(){
		var items = this.state.items.map(function  (item) {
			return <tr><td><div className="mui-font-style-caption">{item.title}</div></td><td><div className="mui-font-style-caption">{item.cost}</div></td><td><AddToCart item={item}/></td></tr>
		})
		return (
			<table className="table table-hover">
			{items}
			</table>
		);
	}
});

module.exports = Catalog;