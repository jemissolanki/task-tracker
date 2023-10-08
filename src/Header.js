import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ title, onAdd, showAdd }) => {
  
  
  return (
    <header className='header'>
      <h1>Task {title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

// Use lowercase "propTypes" instead of "PropTypes"
Header.defaultProps = {
  title: 'Task Tracker',
};

// Use lowercase "propTypes" instead of "PropTypes"
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
