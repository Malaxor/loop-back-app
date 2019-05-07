import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveryNew = () => <h2>SurveryNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Route exact path='/survey' component={Dashboard} />
         <Route exact path='/survey/new' component={SurveryNew} />
         <Route exact path='/landing' component={Landing} />
      </div>
   </BrowserRouter>
);
export default App;