/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var Snackbar = mui.Snackbar;

var AddToCart = React.createClass({
	handleClick : function  () {
		AppActions.addItem(this.props.item); 
	},
	render:function(){
		return <RaisedButton onClick={this.handleClick} label="Add to cart"></RaisedButton>
	}
});

module.exports = AddToCart;