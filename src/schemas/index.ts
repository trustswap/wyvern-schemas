// To help typescript find the type
import { Schema } from '../types';

import { mainSchemas } from './main/index';
import { rinkebySchemas } from './rinkeby/index';
import { goerliSchemas } from './goerli/index';

export const schemas = {
  rinkeby: rinkebySchemas,
  goerli: goerliSchemas,
  main: mainSchemas,
  matic: mainSchemas,
  mumbai: rinkebySchemas
};
