var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function _getCartTotals () {
	return AppStore.getCartTotals();
}

/** @jsx React.DOM */
var CartSummary = React.createClass({
	mixins:[StoreWatchMixin(_getCartTotals)],
	render:function(){
    	return (
	    	<div>
	    		<Link href="/cart" className="btn btn-success">
	    		Cart Items : {this.state.quantity} / ${this.state.total}
	    		</Link>
	    	</div>
		)
	}
});

module.exports = CartSummary;