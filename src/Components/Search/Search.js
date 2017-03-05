import { connect } from 'react-redux';
import { getUserData, blankUser, getCachedUserData, followers, following } from './../../actions';
import SearchBox from './../SearchBox/SearchBox';
import appStore from './../../store';

const obtainUserDeps = (user, dispatch) => {
  if (!Array.isArray(user.followers)) {
    dispatch(followers(user.login));
  }

  if (!Array.isArray(user.following)) {
    dispatch(following(user.login));
  }
};

const mapDispatchToProps = (dispatch) => ({
    searchHandler: (name) => {
      let state;
      if (name) {
        dispatch(getCachedUserData(name));
        state = appStore.getState();
        if (!state.user.login) {
          dispatch(getUserData(name)).then(() => {
            state = appStore.getState();
            obtainUserDeps(state.user, dispatch);
          });
        } else {
          obtainUserDeps(state.user, dispatch);
        }
      } else {
        dispatch(blankUser());
      }
    },
  });

/**
 * Container component
 */
const Search = connect(
  null,
  mapDispatchToProps
)(SearchBox);

export default Search;
