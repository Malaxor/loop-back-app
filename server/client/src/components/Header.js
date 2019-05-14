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
         return [
            <li key='1'><Payments /></li>,
            <li key='3' style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
            <li key='2'><GoogleUser href="/api/logout" message='Sign Out' /></li>
         ];
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
const mapStateToProps = ({ auth })  => ({ auth });
export default connect(mapStateToProps)(Header);