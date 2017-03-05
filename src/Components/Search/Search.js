import { connect } from 'react-redux';
import { changeUserName } from './../../actions';
import { SearchBox } from './../SearchBox/SearchBox';

const mapStateToProps = (state) => ({
    name: state.name,
  });

const mapDispatchToProps = (dispatch) => ({
    searchHandler: (name) => {
      changeUserName(name);
    },
  });

/**
 * Container component
 */
const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

export default Search;
