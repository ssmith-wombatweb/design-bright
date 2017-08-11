// import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createUser } from '../../../../actions';

import Register from './components';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = dispatch => ({
  onSubmitUser(newUser) {
    dispatch(
      createUser(newUser),
    );
  },
  onSelectUserType(type) {
    console.log(type);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);