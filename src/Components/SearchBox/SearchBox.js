import React, { Component } from 'react';
import { debounce } from 'lodash';

/**
 * Presentation component
 */
class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.props.decouncedBy = this.props.decouncedBy || 500;
  }

  getInitialState() {
    return {
        query: this.props.query,
      };
  }

  componentWillMount() {
    this.debauncedHandler = debounce(() => {
      this.props.searchHandler.apply(this, [this.state.query]);
    }, this.props.decouncedBy);
  }

  onChange(event) {
    this.setState({ query: event.target.value });
    this.handleSearchDebounced();
  }

  render() {
    return (
        <input type="search"
               value={this.state.query}
               onChange={this.onChange} />
    );
  }
}

export default SearchBox;
