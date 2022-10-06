// To help typescript find the type
import { NetworkTokens } from '../types';
import { mainTokens } from './main/index';
import { maticTokens } from './matic/index';
import { mumbaiTokens } from './mumbai/index';
import { rinkebyTokens } from './rinkeby/index';
import { goerliTokens } from './goerli/index';

export const tokens = {
  rinkeby: rinkebyTokens,
  goerli: goerliTokens,
  main: mainTokens,
  matic: maticTokens,
  mumbai: mumbaiTokens
};
