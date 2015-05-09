/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('./app-addtocart.jsx');
var CatalogItem = require('./app-catalogitem.jsx');

function _getCatalog () {
	return { items:  AppStore.getCatalog() };
}

var Catalog = React.createClass({
	getInitialState : function  () {
		return _getCatalog();
	},
	render:function(){
		var items = this.state.items.map(function  (item) {
			return <CatalogItem item={item} />
		})
		return (
			<div className="row">
			{items}
			</div>
		);
	}
});

module.exports = Catalog;