import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  

  return (
    <button onClick={onClick} style={{ backgroundColor: color }}  className='btn'>
      {text}
    </button>
  );
};

// Use lowercase "button" instead of "Button" for defaultProps
Button.defaultProps = {
  color: 'steelblue',
};

// Correct the propTypes definition by using a colon ":" instead of an equal sign "="
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
