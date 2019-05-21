import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleUser from './GoogleUser';
import Payments from './Payments';

class Header extends Component {

   renderContent() {
      
      switch(this.props.auth) {
         case null:
         return;

         case false:
         return <GoogleUser href="/auth/google" message='Google Sign In' />;
         
         default:
         return (
            <React.Fragment>
               <Payments />
               Credits: {this.props.auth.credits}
               <GoogleUser href="/api/logout" message='Sign Out' />
            </React.Fragment>
         );   
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
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);