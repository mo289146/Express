var React= require("react");
var{Link}=require('react-router');
var NavBarComponent=React.createClass({
  render:function(){
    return(
      <div className="container">
      <div className="row">
      <div className="col-md-12">
      <nav className="navbar navbar-default navbar-inverse" role="navigation">
      <div className="navbar-header">

      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
      </button> <a className="navbar-brand" href="#">Brand</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
      <li><Link to ="/mygmail" activeClassName="active">My Gmail</Link></li>
      <li><Link to ="/about" activeClassName="active">About Us </Link></li>
      <li><Link to ="/contactus" activeClassName="active">Contact Us </Link></li>
      </ul>
      <form className="navbar-form navbar-left" role="search">
      <div className="form-group">
      <input type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-default">
      Submit
      </button>
      </form>
      <ul className="nav navbar-nav navbar-right">
      <li>
      <a href="#">Link</a>
      </li>
      <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Account<strong className="caret"></strong></a>
      <ul className="dropdown-menu">
      <li>
      <a href="#">My Profile</a>
      </li>
      <li>
      <a href="#">Setting</a>
      </li>
      <li className="divider">
      </li>
      <li>
      <a href="#">Logout</a>
      </li>
      </ul>
      </li>
      </ul>
      </div>

      </nav>
      </div>
      </div>
      </div>

    )
  }
})
module.exports=NavBarComponent;
