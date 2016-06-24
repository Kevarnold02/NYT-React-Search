//include react and react router
var React = require('react');
var Router = require('react-router');

//create the main component
var Main = React.createClass({

	render: function(){
		return (
			<div className="main-container">
				<p>Header</p>

				<div className="container">
						{this.props.children}
				</div>
			
			</div>
		)
	}
});

module.exports = Main;