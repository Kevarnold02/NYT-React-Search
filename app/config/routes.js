//config/routes

//1. include react and the router
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

//2. include the index route to catch all
//checkout the docs for react-router
var IndexRoute = Router.IndexRoute;


//3. reference the components
var Main = require('../components/Main');
var Saved = require('../components/Saved');
var Search = require('../components/Search.js');


//export the routes
module.exports = (
	<Route path="/" component={Main}>
		{/* if the uses selects search or samve, show the appropriate componenet*/}
		<Route path="Search" component={Search} />
		<Route path="Saved" component={Saved} />
		{/* if the user selects any other path..take them home */}
		<IndexRoute component={Search} />
	</Route>
)