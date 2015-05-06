/** @jsx React.DOM */
var Catalog = require('./catalog/app-catalog.jsx');
var CatalogDetails = require('./product/app-catalogdetails.jsx');
var Cart = require('./cart/app-cart.jsx');
var Template = require('./app-template.jsx')
var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var Main = React.createClass({
	render : function(){
		return (
			<Template>
				<Locations>
					<Location path="/" handler={Catalog} />
					<Location path="/cart" handler={Cart} />
					<Location path="/item/:item" handler={CatalogDetails} />
				</Locations>
			</Template>
		)
	}
});

module.exports = Main;
