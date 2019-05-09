import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// importing everything from the actions folder, then assigning everything to the actions variable object
import * as actions from '../actions';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveryNew = () => <h2>SurveryNew</h2>;
const Landing = () => <h2>Landing</h2>;

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
                  <Route exact path='/survey' component={Dashboard} />
                  <Route exact path='/survey/new' component={SurveryNew} />
                  <Route exact path='/landing' component={Landing} />
               </div>
            </BrowserRouter>
         </div>
      );
   }
}
export default connect(null, actions)(App);