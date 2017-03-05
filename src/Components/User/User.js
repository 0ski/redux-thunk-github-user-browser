import React, { Component } from 'react';
import './User.css';

class User extends Component {
  render() {
    const { user, error, isLoading } = this.props;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else if (error) {
      return (
        <div>
          <p>{ error.message }</p>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{ user.login }</h3>
        <img role="presentation" width="64" height="64" src={ user.avatar_url } />
          <div>
            <h4>Followers:</h4>
          </div>
          <div>
            <h4>Following:</h4>
          </div>
          <div>
            <h4>JSON:</h4>
            <pre className="user">{ JSON.stringify(user, null, 2) }</pre>
          </div>
        </div>
      );
    }
  }
}

export default User;
