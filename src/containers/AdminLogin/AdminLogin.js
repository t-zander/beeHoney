import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth/auth';
import AdminLoginForm from '../../components/AdminLoginForm/AdminLoginForm';

export class AdminLogin extends Component{
  handleSubmit = (credentials) => {
    this.props.onLoginAsAdmin(credentials);
  }

  render (){
    return(
      <AdminLoginForm onSubmit={this.handleSubmit}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginAsAdmin: (credentials) => dispatch(authActions.onLoginAsAdmin(credentials))
  }
}

export default connect(null, mapDispatchToProps)(AdminLogin);