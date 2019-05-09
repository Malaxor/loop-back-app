import axios from 'axios';

import { FETCH_USER } from './types'

export const fetchUser = () => async dispatch => {
   
   const currentUser = await axios.get('/api/user');
   dispatch({
      type: FETCH_USER,
      payload: currentUser
   });
}