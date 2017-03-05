import React, { Component } from 'react';
import './User.css';
import Followers from './../FollowList/Followers';
import Following from './../FollowList/Following';

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
        <div className="user">
          <header>
            <h3>{ user.login }</h3>
            <div>
              <img role="presentation" width="64" height="64" src={ user.avatar_url } />
            </div>
          </header>
          <div className="follow-list">
            <h4>Followers:</h4>
            <Followers />
          </div>
          <div className="follow-list">
            <h4>Following:</h4>
            <Following />
          </div>
          <div className="json">
            <h4>JSON:</h4>
            <pre>{ JSON.stringify(user, null, 2) }</pre>
          </div>
        </div>
      );
    }
  }
}

export default User;
