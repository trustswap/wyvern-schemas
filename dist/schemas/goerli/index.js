"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../ContractRole/index");
const ERC1155_1 = require("../ERC1155");
const ERC20_1 = require("../ERC20");
const index_2 = require("../ERC721/index");
const index_3 = require("./goerliCryptoKitties/index");
const index_4 = require("./goerliCustom/index");
const index_5 = require("./goerliENSName/index");
const index_6 = require("./goerliENSShortNameAuction/index");
const index_7 = require("./goerliOwnableContract/index");
const index_8 = require("./testGoerliNFT/index");
exports.goerliSchemas = [
    index_3.goerliCryptoKittiesSchema,
    index_4.goerliCustomSchema,
    index_5.goerliENSNameSchema,
    index_6.goerliENSShortNameAuctionSchema,
    index_7.goerliOwnableContractSchema,
    index_8.testGoerliNFTSchema,
    ERC20_1.ERC20Schema,
    index_2.ERC721Schema,
    ERC1155_1.ERC1155Schema,
    index_1.ContractRoleSchema,
];
//# sourceMappingURL=index.js.map