import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// importing everything from the actions folder, then assigning everything to the actions variable object
import * as actions from '../actions';

import Header from './Header';

class App extends Component {

   componentDidMount() {
      this.props.fetchUser();
   }
   render() {
      return (
         <div className='container'>
            <BrowserRouter>
               <div>
                  <Header />
                  <Route exact path='/survey' />
                  <Route exact path='/survey/new' />
                  <Route exact path='/landing' />
               </div>
            </BrowserRouter>
         </div>
      );
   }
}
export default connect(null, actions)(App);