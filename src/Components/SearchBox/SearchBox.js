import React, { Component } from 'react';
import { debounce } from 'lodash';
import './SearchBox.css';

/**
 * Presentation component
 */
class SearchBox extends Component {
  constructor(props = {}) {
    super(props);
    this.state = {
      name: this.props.name || '',
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const debouncedBy = this.props.debouncedBy || 500;
    this.debauncedHandler = debounce(() => {
      this.props.searchHandler.apply(this, [this.state.name]);
    }, debouncedBy);
  }

  onChange(event) {
    this.setState({
      name: event.target.value,
    });
    this.debauncedHandler();
  }

  render() {
    return (
        <input placeholder="Username..."
               className="main-search"
               type="text"
               value={this.state.name}
               onChange={this.onChange} />
    );
  }
}

export default SearchBox;
