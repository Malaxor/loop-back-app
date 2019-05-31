import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

   componentDidMount() {
      this.props.fetchSurveys();
   }
   render() {
      return this.props.surveys.map(survey => { // used the reverse method to display the latest survey topmost of component
         return (
            <div key={survey._id} className='card darken-1 blue-grey'>
               <div className='card-content white-text'>
                  <span className='card-title'>{survey.title}</span>
                  <p>
                     {survey.body}
                  </p>
                  <p className='right'>
                     Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
               </div>
               <div className='card-action'>
                  <a>Yes: {survey.yes}</a>
                  <a>No: {survey.no}</a>
               </div>
            </div>
         );
      })
   }
}
const mapStateToProps = state => ({ surveys: state.surveys });
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);