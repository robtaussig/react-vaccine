import React from 'react';

export const withVaccine = (WrappedComponent, vaccination, key) => {
  if (vaccination) {    
    return (props) => <WrappedComponent {...vaccination(props, WrappedComponent)}/>;
  } else {
    throw new Error(`No vaccination found for key ${key}`);
  }
};