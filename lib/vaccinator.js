import React from 'react';
import * as vaccinations from '../vaccinations.js';

let initialized = false;

export const vaccinator = (getState, dispatch) => next => action => {
  if (initialized === false) {
    vaccinations.setupTests(getState, dispatch, action);
    initialized = true;
  }

  vaccinations.acceptAction(getState, action);

  next(action);
};