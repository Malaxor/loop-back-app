import React, { Component } from 'react';

class Header extends Component {

   render() {
      return (
         <nav>
            <div className='nav-wrapper'>
               <a className='left brand-logo'>Loop Back App</a>
               <ul className='right'>
                  <li>
                     <a>Google Login</a>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}
export default Header;