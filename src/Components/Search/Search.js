import { connect } from 'react-redux';
import { getUserData, userData, blankUser, getCachedUserData } from './../../actions';
import SearchBox from './../SearchBox/SearchBox';
import appStore from './../../store';

const mapDispatchToProps = (dispatch) => ({
    searchHandler: (name) => {
      let state;
      if (name) {
        dispatch(getCachedUserData(name));
        state = appStore.getState();
        console.log(state);
        if (!state.user.login) {
          dispatch(getUserData(name));
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
