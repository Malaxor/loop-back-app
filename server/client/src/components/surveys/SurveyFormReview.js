import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
 
   const reviewFields = _.map(formFields, ({ name, label }) => {
      return (
         <div key={name}>
            <label>{label}</label>
            <div>
               {formValues[name]}
            </div>
         </div>
      );
   });
   return (
      <div>
         <h5>Please confirm you entries</h5>
         {reviewFields}
         <button className="yellow darken-2 white-text btn-flat" onClick={onCancel}>
            Back
         </button>
         <button className="green btn-flat white-text right" onClick={() => submitSurvey(formValues, history)}>
            Submit Survey
            <i className="material-icons right">email</i>
         </button>
      </div>
   ); 
}
const mapStateToProps = state => ({ formValues: state.form.surveyForm.values });
// withRouter enables the history object as a component prop
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));