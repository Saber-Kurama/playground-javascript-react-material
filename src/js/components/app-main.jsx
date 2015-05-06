/** @jsx React.DOM */
var React = require('react');
var Catalog = require('./catalog/app-catalog.jsx');
var Cart = require('./cart/app-cart.jsx');
var mui = require('material-ui');
var Paper = mui.Paper;

var Main = React.createClass({
	render : function(){
		return (
			<div>
				<h1>Lets Shop</h1>
				<Catalog />
				<h1>Cart</h1>
				<Cart />
			</div>
		)
	}
});

module.exports = Main;
