import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

   renderContent() {
      switch(this.props.auth) {
         case null:
            return 'still deciding';
         case false:
            return 'I\'m logged out';
         default:
         return 'I\'m logged in';
      }
   }
   render() {
      return (
         <nav>
            <div className='nav-wrapper'>
               <a className='left brand-logo'>Loop Back App</a>
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