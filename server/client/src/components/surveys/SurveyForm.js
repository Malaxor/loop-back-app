import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
   { label: 'Survey Title', name: 'title', validationError: 'Please provide a title' },
   { label: 'Subject Line', name: 'subject', validationError: 'Please provide a subject' },
   { label: 'Email Body', name: 'body', validationError: 'Please provide content to the body' },
   { label: 'Recipient List', name: 'emails', validationError: 'Please provide at least one email' }
];

class SurveyForm extends Component {

   renderFields() {
      return _.map(FIELDS, ({ label, name }) => {
         return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      });   
   }
   render() {
      return (
         <div>
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
               {this.renderFields()}
               <Link to='/surveys' className='red btn-flat white-text'>Cancel</Link>
               <button className='teal btn-flat right white-text' type='submit'>
                  Next
                  <i className='material-icons right'>done</i>
               </button>
            </form>   
         </div>
      );
   }
}
function validate(formValues) {

   const errors = {};
   errors.emails = validateEmails(formValues.emails || '');
   
   _.each(FIELDS, ({ name, validationError }) => {

      if(!formValues[name]) {
         errors[name] = validationError;
      }
   });
   return errors;
}
export default reduxForm({
   validate,
   form: 'surveyForm'
 })(SurveyForm);