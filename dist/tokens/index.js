"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./main/index");
const index_2 = require("./matic/index");
const index_3 = require("./mumbai/index");
const index_4 = require("./rinkeby/index");
const index_5 = require("./goerli/index");
exports.tokens = {
    rinkeby: index_4.rinkebyTokens,
    goerli: index_5.goerliTokens,
    main: index_1.mainTokens,
    matic: index_2.maticTokens,
    mumbai: index_3.mumbaiTokens
};
//# sourceMappingURL=index.js.map