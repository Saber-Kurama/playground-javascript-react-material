var React = require('react');
var Link = require('react-router-component').Link;

/** @jsx React.DOM */
var CartSummary = React.createClass({
  render:function(){
    return (
    	<div>
    		<Link href="/cart" className="btn btn-success">
    		Cart Items : QTY / $COST
    		</Link>
    	</div>
	)
  }
});

module.exports = CartSummary;