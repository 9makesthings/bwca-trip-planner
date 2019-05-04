import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => {

  console.log( `current props:`, props );
  

return(

  <div className="nav">
    <Link to="/home">
      <i className="material-icons md-36">explore</i>
      <h2 className="nav-title">PaddleNorth</h2>
    </Link>

    <div className="nav-right" >
    
      <Link className={props.location.pathname === '/home' ? 'active nav-link' : 'nav-link'} to="/home">
        Home
      </Link>
      <Link className={props.location.pathname === '/create-trip' ? 'active nav-link' : 'nav-link'} to="/create-trip">
        Plan a Trip
      </Link>
      <Link className={props.location.pathname === '/my-trips' ? 'active nav-link' : 'nav-link'} to="/my-trips">
        My Trips
      </Link>

      {/* <Link className="nav-link" to="/resources">
        Resources
      </Link> */}

      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/info">
            Info Page
          </Link> */}
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link> */}

    </div>
  </div>
);
    }

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withRouter(Nav));
