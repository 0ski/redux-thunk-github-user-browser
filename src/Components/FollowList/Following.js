import { connect } from 'react-redux';
import List from './../List/List';

const mapStateToProps = state => ({
  isLoading: state.user.isLoadingFollowing,
  data: state.user.following,
});

export default connect(mapStateToProps)(List);
