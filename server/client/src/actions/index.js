import axios from 'axios';
import { 
   FETCH_USER
} from './types'

/******************* API Requests ***********************/
// get user
export const fetchUser = () => async dispatch => {
   const res = await axios.get('/api/user'); 
   dispatch({ type: FETCH_USER, payload: res.data });
}
// post stripe
export const handleToken = token => async dispatch => {
   const res = await axios.post('/api/stripe', token);
   dispatch({ type: FETCH_USER, payload: res.data });
}
// post surveys
export const submitSurvey = (surveyValues, history) => async dispatch => {
   const res = await axios.post('/api/surveys', surveyValues);
   console.log(res);
   history.push('/surveys');
   dispatch({ type: FETCH_USER, payload: res.data });
}