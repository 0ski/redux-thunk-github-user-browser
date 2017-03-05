import React, { Component } from 'react';

class List extends Component {
  render() {
    const { data, isLoading } = this.props;

    if (isLoading) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <pre>{ JSON.stringify(data, null, 2) }</pre>
      );
    }
  }
}

export default List;
