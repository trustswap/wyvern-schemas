import * as Web3 from 'web3';

import {
  EventInputKind,
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../../types';

export type GoerliCryptoKittiesType = string;

export const goerliCryptoKittiesSchema: Schema<GoerliCryptoKittiesType> = {
  version: 1,
  deploymentBlock: 0,
  name: 'GoerliCryptoKitties',
  description: 'Goerli Testnet CryptoKitties',
  thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
  website: 'https://cryptokitties.co',
  fields: [
    {name: 'ID', type: 'uint256', description: 'CryptoKitty number.'},
  ],
  assetFromFields: (fields: any) => fields.ID,
  assetToFields: asset => ({ID: asset}),
  formatter:
    async asset => {
      return {
        thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
        title: 'GoerliCryptoKitty #' + asset,
        description: 'A Goerli kitten!',
        url: 'https://www.cryptokitties.co/kitty/' + asset,
        properties: [],
      };
  },
  functions: {
    transfer: asset => ({
      type: Web3.AbiType.Function,
      name: 'transfer',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
      inputs: [
        {kind: FunctionInputKind.Replaceable, name: '_to', type: 'address'},
        {kind: FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset},
      ],
      outputs: [],
    }),
    ownerOf: asset => ({
      type: Web3.AbiType.Function,
      name: 'ownerOf',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
      inputs: [
        {kind: FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset},
      ],
      outputs: [
        {kind: FunctionOutputKind.Owner, name: 'owner', type: 'address'},
      ],
    }),
    assetsOfOwnerByIndex: [{
      type: Web3.AbiType.Function,
      name: 'tokensOfOwnerByIndex',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_owner', type: 'address'},
        {kind: FunctionInputKind.Index, name: '_index', type: 'uint'},
      ],
      outputs: [
        {kind: FunctionOutputKind.Asset, name: 'tokenId', type: 'uint'},
      ],
      assetFromOutputs: (output: any) => {
        if (output.toNumber() === 0) {
          return null;
        } else {
          return output.toString();
        }
      },
    }],
  },
  events: {
    transfer: [{
      type: Web3.AbiType.Event,
      name: 'Transfer',
      target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
      anonymous: false,
      inputs: [
        {kind: EventInputKind.Source, indexed: true, name: 'from', type: 'address'},
        {kind: EventInputKind.Destination, indexed: true, name: 'to', type: 'address'},
        {kind: EventInputKind.Asset, indexed: true, name: 'tokenId', type: 'uint256'},
      ],
      assetFromInputs: async (inputs: any) => inputs.tokenId,
    }],
  },
  hash: a => a,
};
