import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {

   renderFields() {
      return _.map(formFields, ({ label, name }) => {
         return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      });   
   }
   render() {
      return (
         <div>
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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
   errors.recipients = validateEmails(formValues.recipients || '');

   _.each(formFields, ({ name, validationError }) => {
      if(!formValues[name]) {
         errors[name] = validationError;
      }
   });
   return errors;
}
export default reduxForm({
   validate,
   form: 'surveyForm',
   destroyOnUnmount: false // persist surveyForm values
 })(SurveyForm);