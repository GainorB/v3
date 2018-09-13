import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const theme = {
  valueContainer: styles => ({
    ...styles,
    justifyContent: 'center',
  }),
  singleValue: styles => ({
    ...styles,
    color: '#fff',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#fff',
  }),
  control: styles => ({
    ...styles,
    backgroundColor: '#090909',
    boxShadow: `0 0 0 1px #090909`,
    borderColor: '#090909',
    letterSpacing: '-0.026em',
    color: '#fff',
    fontSize: '5rem',
    fontWeight: 500,
    '&:hover': { borderColor: '#090909' },
  }),
  container: styles => ({
    ...styles,
    width: '100%',
    caretColor: '#2348f3',
    textAlign: 'center',
  }),
  menuList: styles => ({
    ...styles,
    textAlign: 'left',
    backgroundColor: '#090909',
  }),
  option: (styles, { data, isDisabled, isFocused }) => ({
    ...styles,
    color: '#fff',
    fontSize: '1.1rem',
    padding: '1em',
    backgroundColor: isFocused && '#2649f0',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    '&:hover': { backgroundColor: '#2649f0' },
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
  clearIndicator: styles => ({
    ...styles,
    cursor: 'pointer',
    '&:hover': { color: '#2649f0' },
  }),
};

class MySelect extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  render() {
    const { onChange, options, placeholder } = this.props;
    return (
      <Select
        styles={theme}
        // autoFocus
        isSearchable
        isClearable
        closeMenuOnSelect
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        isDisabled={options.length === 0 || typeof options === 'undefined'}
      />
    );
  }
}

export default MySelect;
