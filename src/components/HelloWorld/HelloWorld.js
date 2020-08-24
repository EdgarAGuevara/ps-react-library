import React from 'react';
import PropTypes from 'prop-types';

/** A super lame component that says Hello with a custom message. */
const HelloWorld = ({message}) => {
  return ( 
    <div>Hello World {message}</div>
   );
}
 
HelloWorld.propTypes ={
  /** Messge to display */
  message: PropTypes.string
};

HelloWorld.defultProps ={
  message: "World"
};

export default HelloWorld;
