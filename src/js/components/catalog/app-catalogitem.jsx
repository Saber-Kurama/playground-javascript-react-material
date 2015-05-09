/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');
var Link = require('react-router-component').Link;
var AddToCart = require('./app-addtocart.jsx');
var mui = require('material-ui');
var Paper = mui.Paper;

var CatalogItem = React.createClass({
  render:function(){
  	var itemStyle = {
  		borderBottom : '1px solid #cc',
  		paddingBottom : 15
  	};
    return (
    	<div className="col-sm-3" style={itemStyle}>
    		<h4>{this.props.item.title}</h4>
    		<img src={this.props.item.img} alt="" />
    		<p>{this.props.item.summary}</p>
    		<p>${this.props.item.cost} <span className="text-success">{this.props.item.isInCart && '(' + this.props.item.quantity + 'in cart)'}</span></p>
    		<div className="btn-group btn-group-xs">
    			<Paper>
    				<Link href={ '/item/' + this.props.item.id } className="mui-font-style-button">Learn more</Link>
    			</Paper>
    		</div>
    		<AddToCart item={this.props.item} />
    	</div>
	)
  }
});

module.exports = CatalogItem;