/** @jsx React.DOM */
var React = require('react');
var Catalog = require('./app-catalog.jsx');
var Cart = require('./app-cart.jsx');

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
