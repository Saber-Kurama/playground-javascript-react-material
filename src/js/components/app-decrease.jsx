/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js')
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var Decrease = React.createClass({
	handleClick : function  () {
		AppActions.decreaseItem(this.props.index); 
	},
	render:function(){
		return <RaisedButton onClick={this.handleClick} label="-"></RaisedButton>
	}
});

module.exports = Decrease;