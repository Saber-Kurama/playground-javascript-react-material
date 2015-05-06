/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js')
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var RemoveFromCart = React.createClass({
	handleClick : function  () {
		AppActions.removeItem(this.props.index); 
	},
	render:function(){
		return <RaisedButton onClick={this.handleClick} label="x"></RaisedButton>
	}
});

module.exports = RemoveFromCart;