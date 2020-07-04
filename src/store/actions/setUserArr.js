/* eslint-disable comma-dangle */
import { SET_USERS_SUCCESS, SET_USERS_ERROR, SET_USERS_STARTED } from './types';

//
export const fetchUsersStarted = () => ({
  type: SET_USERS_STARTED,
});

export const setUserArrSuccess = (users) => ({
  type: SET_USERS_SUCCESS,
  payload: {
    users,
  },
});

export const setUserArrError = (error) => ({
  type: SET_USERS_ERROR,
  payload: {
    error,
  },
});

const getUser = () => (dispatch) => {
  fetch('https://api.github.com/users?/since=100&per_page=100')
    .then((response) => response.json())
    .then((users) => {
      console.log(users);
      dispatch(setUserArrSuccess(users));
    });
};

export default getUser;
