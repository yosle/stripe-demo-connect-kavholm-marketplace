import React from 'react';

import Layout from '../../components/layout';
import {redirect} from '../../utils/redirect';
import API from '../../helpers/api';

class AuthStripeCallback extends React.Component {
  static async getInitialProps(context) {
    let code = context.query.code;

    try {
      await API.makeRequest('post', `/api/payouts/setup`, {
        code: code,
      });
      // return redirect('/dashboard', context);
    } catch (err) {
      console.log('AuthStripeCallback.error', err);
    }

    return {};
  }

  render() {
    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
      />
    );
  }
}

export default AuthStripeCallback;
