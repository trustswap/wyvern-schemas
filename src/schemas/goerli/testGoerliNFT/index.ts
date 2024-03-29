import * as Web3 from 'web3';

import {
  EventInputKind,
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../../types';

export type TestGoerliNFTType = string;

export const testGoerliNFTSchema: Schema<TestGoerliNFTType> = {
  version: 1,
  deploymentBlock: 0,
  name: 'TestGoerliNFT',
  description: 'Goerli ERC721 non-fungible token for Wyvern Exchange testing',
  thumbnail: 'https://cointelegraph.com/storage/uploads/view/f88e17e41f607dc0aef238230dd40cc6.png',
  website: 'https://projectwyvern.com',
  fields: [
    {name: 'ID', type: 'uint256', description: 'Token identification number.'},
  ],
  assetFromFields: (fields: any) => fields.ID,
  assetToFields: asset => ({ID: asset}),
  formatter:
    async asset => {
      return {
        thumbnail: 'https://cointelegraph.com/storage/uploads/view/f88e17e41f607dc0aef238230dd40cc6.png',
        title: 'TestGoerliNFT #' + asset,
        description: 'A useless NFT!',
        url: 'https://www.projectwyvern.com',
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
      target: '0x07a6dc6e3f1120ca03658d473d10aee3af5f8abb',
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
      target: '0x07a6dc6e3f1120ca03658d473d10aee3af5f8abb',
      inputs: [
        {kind: FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset},
      ],
      outputs: [
        {kind: FunctionOutputKind.Owner, name: '_owner', type: 'address'},
      ],
    }),
    assetsOfOwnerByIndex: [],
  },
  events: {
    transfer: [{
      type: Web3.AbiType.Event,
      name: 'Transfer',
      target: '0x07a6dc6e3f1120ca03658d473d10aee3af5f8abb',
      anonymous: false,
      inputs: [
        {kind: EventInputKind.Source, indexed: true, name: '_from', type: 'address'},
        {kind: EventInputKind.Destination, indexed: true, name: '_to', type: 'address'},
        {kind: EventInputKind.Asset, indexed: false, name: '_tokenId', type: 'uint256'},
      ],
      assetFromInputs: async (inputs: any) => inputs._tokenId.toString(),
    }],
  },
  hash: a => a,
};
