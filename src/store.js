import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { USER_DATA, USER_NAME } from './actions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DATA:
      /** the user from the action is a new object from a response,
      *   immutability is preserved
      */
      state.user = action.user;
      return state;
    case USER_NAME:
      state.name = action.name;
      console.log(state);
      return state;
    default:
      return state;
  }
};

const appStore = createStore(
  userReducer,
  applyMiddleware(thunk)
);

export default appStore;
