import { connect } from 'react-redux';
import List from './../List/List';

const mapStateToProps = state => ({
  isLoading: state.user.isLoadingFollowers,
  data: state.user.followers,
});

export default connect(mapStateToProps)(List);
