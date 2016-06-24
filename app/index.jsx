// var React = require('react');
// var ReactDom = require('react-dom');
// // console.log(ReactDom);
// //propeties associated with routes
// var Router = require('react-router').Router;

// var routes = require('./config/routes');

// ReactDom.render(
// 	<Router>{routes}</Router>,
// 	document.getElementById('app')
// )

// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the property associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes');

// Renders the contents according to the route page. 
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')
)