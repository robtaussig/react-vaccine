import { vaccinator } from './lib/vaccinator.js';
import { withVaccine } from './lib/with-vaccine.js';
import * as vaccinations from './vaccinations.js';

const getVaccination = key => {
  return vaccinations.Components[key];
};

const vaccinate = (key, Component) => {
  return withVaccine(Component, getVaccination(key), key);
};

export { vaccinator, vaccinate };