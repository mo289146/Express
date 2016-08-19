var React = require('react');
var {render} = require('react-dom');
var {Router,Route,browserHistory} = require('react-router');
var About = require('./Components/About');
var ContactUs = require('./Components/ContactUs');
var GmailBox = require('./Components/GmailBox');
var NavBarComponent = require('./Components/NavBarComponent');

var App = React.createClass({
 render:function()
 {
   return(
     <div className="container">
     <NavBarComponent/>
     {this.props.children}
     </div>);
 }
})

render((<Router history={browserHistory}>
 <Route path="/" component={App}>
   <Route path="/about" component={About}/>
   <Route path="/contactus" component={ContactUs}/>
   <Route path="/mygmail" component={GmailBox}/>
 </Route>
</Router>),document.getElementById('app'));
