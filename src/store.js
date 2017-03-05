import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { actions } from './actions';

const initialState = {
  user: {},
  users: [],
  isLoading: false,
  error: {
    message: 'Start typing to obtain a github user data',
  },
};

const userReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case actions.USER_DATA:
      if (action.user === '') {
        newState.error = {
          message: initialState.error.message,
        };
      } else {
        const cachedUser = state.users.find(
          user => user.login.toLowerCase() === action.user.login.toLowerCase()
        ) || {};
        newState.error = null;

        if (!cachedUser.login) {
          newState.users = newState.users.concat([action.user]);
        }
      }

      newState.user = action.user;
      break;
    case actions.USER_DATA_ERROR:
      newState.error = action.error;
      break;
    case actions.LOADING_USER_DATA:
      newState.isLoading = action.isLoading;
      break;
    case actions.CHECK_CACHE:
      const user = state.users.find(
        user => user.login.toLowerCase() === action.login.toLowerCase()
      ) || {};
      newState.user = Object.assign({}, user);

      break;
    case actions.L_FOLLOWERS:
      newState.user.isLoadingFollowers = action.loadingFollowers;
      break;
    case actions.L_FOLLOWING:
      newState.user.isLoadingFollowing = action.loadingFollowing;
      break;
    case actions.FOLLOWERS:
      newState.user.followers = action;
      if (Array.isArray(action)) {
        newState.users.map(user => {
          if (user.login.toLowerCase() === newState.user.login.toLowerCase()) {
            return Object.assign({}, newState.user);
          } else {
            return user;
          }
        });
      }

      break;
    case actions.FOLLOWING:
      newState.user.following = action;
      if (Array.isArray(action)) {
        newState.users.map(user => {
          if (user.login.toLowerCase() === newState.user.login.toLowerCase()) {
            return Object.assign({}, newState.user);
          } else {
            return user;
          }
        });
      }

      break;
    default:
      break;
  }

  return newState;
};

const appStore = createStore(
  userReducer,
  initialState,
  applyMiddleware(thunk)
);

export default appStore;
