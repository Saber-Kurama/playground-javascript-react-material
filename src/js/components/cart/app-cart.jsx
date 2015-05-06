/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var RemoveFromCart = require('./app-removefromcart.jsx');
var Increase = require('./app-increase.jsx');
var Decrease = require('./app-decrease.jsx');


function _getCartItems () {
	return { items:  AppStore.getCart() };
}

var Cart = React.createClass({
	getInitialState : function  () {
		return _getCartItems();
	},
	componentWillMount:function(){
		AppStore.addChangeListener(this._onChange);
	},
	_onChange:function  () {
		this.setState(_getCartItems());
	},
	render:function(){
		var total = 0;
		var items = this.state.items.map(function  (item, i) {
			var subtotal = item.cost * item.quantity;
			total += subtotal;
			return (
				<tr key={i}>
					<td><RemoveFromCart index={i} /></td>
					<td><div className="mui-font-style-caption">{item.title}</div></td>
					<td><div className="mui-font-style-caption">{item.quantity}</div></td>
					<td>
						<Increase index={i}/>
						<Decrease index={i}/>
					</td>
					<td><div className="mui-font-style-title">${subtotal}</div></td>
				</tr>
			);
		});
		return (
			<table className="table table-hover">
			<thead> 
				<tr>
					<th></th>
					<th><div className="mui-font-style-subhead-1">Item</div></th>
					<th><div className="mui-font-style-subhead-1">Qty</div></th>
					<th></th>
					<th><div className="mui-font-style-subhead-1">Subtotal</div></th>
				</tr>
			</thead>
			<tbody>
			{items}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan="4" className="text-right">Total</td>
					<td>${total}</td>
				</tr>
			</tfoot>
			</table>
		);
	}
});

module.exports = Cart;