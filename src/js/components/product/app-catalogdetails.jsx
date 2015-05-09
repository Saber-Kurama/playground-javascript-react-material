/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('../catalog/app-addtocart.jsx');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');
var Link = require('react-router-component').Link;
var mui = require('material-ui');
var Paper = mui.Paper;

function _getCatalogItem (component) {
	var thisItem;
	AppStore.getCatalog().forEach(function  (item,index) {
		if (item.id.toString() === component.props.item) {
			thisItem = item;
		};
	});
	return {
		'item' : thisItem
	};
}

var CatalogDetails = React.createClass({
	mixins : [StoreWatchMixin(_getCatalogItem)],
	render:function(){
		return (
	    	<div >
	    		<h2>{this.state.item.title}</h2>
	    		<img src={this.state.item.img} alt="" />
	    		<p>{this.state.item.description}</p>
	    		<p>${this.state.item.cost} <span className="text-success">{this.state.item.isInCart && '(' + this.state.item.quantity + 'in cart)'}</span></p>
	    		<AddToCart item={this.state.item} />
	    		<div className="btn-group btn-group-sm">
	    			<Paper>
	    				<Link href='/' className="mui-font-style-button">Continue shopping</Link>
	    			</Paper>
	    		</div>
	    	</div>
		)
	}
});

module.exports = CatalogDetails;