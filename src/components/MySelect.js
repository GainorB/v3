import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const theme = {
  placeholder: styles => ({
    ...styles,
    color: '#fff',
    fontSize: '5rem',
    padding: '0.5rem 0.5rem',
    fontWeight: 500,
    letterSpacing: '-0.026em',
  }),
  control: (styles, { data, isDisabled, isFocused }) => ({
    ...styles,
    height: '100px !important',
    minHeight: '100px !important',
    width: '500px !important',
    backgroundColor: '#090909',
    boxShadow: isFocused && `0 0 0 1px #090909`,
    borderColor: isFocused ? '#090909' : '#090909',
    '&:hover': { borderColor: '#090909' },
  }),
};

class MySelect extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    selectedOption: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  state = {
    isClearable: true,
  };

  render() {
    const { isClearable } = this.state;
    const { onChange, options, selectedOption, placeholder } = this.props;
    return (
      <Select
        styles={theme}
        isClearable={isClearable}
        placeholder={placeholder}
        selectedOption={selectedOption}
        onChange={onChange}
        options={options}
      />
    );
  }
}

export default MySelect;
