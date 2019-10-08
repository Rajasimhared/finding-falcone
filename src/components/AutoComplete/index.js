import React from 'react';
import './style.css';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: props.data,
      selected: [],
      searchTerm: '',
      highlight: false,
      count: 0
    };
  }

  handleChange = e => {
    const { data } = this.props;
    const value = e.target.value.toLowerCase();
    let filtered = [];
    if (value) {
      filtered = data.filter(item => item.name.toLowerCase().includes(value));
    }
    this.setState({ filtered, searchTerm: value });
  };

  handleSelect = id => {
    let { filtered, selected } = this.state;
    let selectedNew = [];
    selectedNew = filtered.filter(item => item.id === id);
    filtered = filtered.filter(item => item.id !== id);
    this.setState({ searchTerm: selected, filtered });
  };

  render() {
    const { filtered, searchTerm } = this.state;
    return (
      <div>
        <div className="header">
          <input
            className="input-field"
            onChange={this.handleChange}
            value={searchTerm}
          />
        </div>
        <div className="dropdown">
          {filtered &&
            filtered.map(item => (
              <div
                className="dropdown-item"
                onClick={() => this.handleSelect(item.id)}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
