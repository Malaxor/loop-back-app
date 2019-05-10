import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleUser from './GoogleUser';

class Header extends Component {

   renderContent() {
      switch(this.props.auth) {
         case null:
         return;

         case false:
         return <GoogleUser link="/auth/google" message='Google Sign In' />;
         
         default:
         return <GoogleUser link="/api/logout" message='Sign Out' />;
      }
   }
   render() {
      return (
         <nav>
            <div className='nav-wrapper'>
               <Link 
                  to={this.props.auth ? '/surveys' : '/'} 
                  className='left brand-logo'
               >Loop Back App
               </Link>
               <ul className='right'>
                  {this.renderContent()}
               </ul>
            </div>
         </nav>
      );
   }
}
const mapStateToProps = state  => ({
   auth: state.auth
});

export default connect(mapStateToProps)(Header);