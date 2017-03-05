import { connect } from 'react-redux';
import User from './../User/User';

const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.isLoading,
  error: state.error,
  name: state.name,
});

export default connect(mapStateToProps)(User);
