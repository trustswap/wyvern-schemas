import { Schema } from '../../types';
import { ContractRoleSchema } from '../ContractRole/index';
import { ERC1155Schema } from '../ERC1155';
import { ERC20Schema } from '../ERC20';
import { ERC721Schema } from '../ERC721/index';

import { goerliCryptoKittiesSchema } from './goerliCryptoKitties/index';
import { goerliCustomSchema } from './goerliCustom/index';
import { goerliENSNameSchema } from './goerliENSName/index';
import { goerliENSShortNameAuctionSchema } from './goerliENSShortNameAuction/index';
import { goerliOwnableContractSchema } from './goerliOwnableContract/index';
import { testGoerliNFTSchema } from './testGoerliNFT/index';

export const goerliSchemas: Array<Schema<any>> = [
  goerliCryptoKittiesSchema,
  goerliCustomSchema,
  goerliENSNameSchema,
  goerliENSShortNameAuctionSchema,
  goerliOwnableContractSchema,
  testGoerliNFTSchema,
  ERC20Schema,
  ERC721Schema,
  ERC1155Schema,
  ContractRoleSchema,
];
