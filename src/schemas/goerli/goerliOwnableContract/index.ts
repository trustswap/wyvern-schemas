import * as Web3 from 'web3';

import {
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../../types';

export interface GoerliOwnableContractType {
  name?: string;
  address: string;
}

export const goerliOwnableContractSchema: Schema<GoerliOwnableContractType> = {
  version: 1,
  deploymentBlock: 0,
  name: 'OwnableContract',
  description: 'Goerli Ownable Smart Contract',
  thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
  website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
  fields: [
    {name: 'Name', type: 'string', description: 'Contract Name'},
    {name: 'Address', type: 'address', description: 'Contract Address'},
  ],
  assetFromFields: (fields: any) => ({
    name: fields.Name,
    address: fields.Address,
  }),
  formatter:
    async asset => {
      return {
        thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
        title: 'Ownable Contract: "' + asset.name + '"',
        description: 'Ownable at address ' + asset.address,
        url: 'https://goerli.etherscan.io/address/' + asset.address,
        properties: [],
      };
  },
  functions: {
    transfer: asset => ({
      type: Web3.AbiType.Function,
      name: 'transferOwnership',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Replaceable, name: 'newOwner', type: 'address'},
      ],
      outputs: [],
    }),
    ownerOf: asset => ({
      type: Web3.AbiType.Function,
      name: 'owner',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: asset.address,
      inputs: [],
      outputs: [
        {kind: FunctionOutputKind.Owner, name: 'owner', type: 'address'},
      ],
    }),
    assetsOfOwnerByIndex: [],
  },
  events: {
    transfer: [],
  },
  hash: a => a.address,
};
