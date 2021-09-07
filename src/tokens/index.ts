// To help typescript find the type

import { mainTokens } from './main/index';
import { maticTokens } from './matic/index';
import { mumbaiTokens } from './mumbai/index';
import { rinkebyTokens } from './rinkeby/index';

export const tokens = {
  rinkeby: rinkebyTokens,
  main: mainTokens,
  matic: maticTokens,
  mumbai: mumbaiTokens
};
