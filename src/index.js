"use strict";
const IPFS = require("ipfs-mini");
const Eth = require("ethjs");
const standardBountiesABI = require("./data/standardbounties.json");
const SBAddress = "0x2af47a65da8CD66729b4209C22017d6A5C2d2400";

module.exports = SBJS;

function SBJS(config) {
  if (!(this instanceof SBJS)) {
    throw new Error(
      '[sbjs] sbjs instance must be instantiated with "new" flag.'
    );
  }
  this.ipfs = new IPFS(config.ipfsprovider);
  this.eth = new Eth(config.web3provider);
}

SBJS.prototype.issueAndActivateBounty = function(
  payload,
  deadline,
  fulfillmentAmount,
  arbiter,
  paysTokens,
  tokenContract,
  value
) {
  return new Promise(async (resolve, reject) => {
    // validate payload

    this.ipfs.addJSON(payload).then(result => {
      console.log(result);

      this.eth.coinbase().then(cb => {
        
        const bountiescontract = this.eth
          .contract(standardBountiesABI)
          .at(SBAddress);

        bountiescontract
          .issueAndActivateBounty(
            cb,
            deadline,
            result,
            fulfillmentAmount,
            cb,
            paysTokens,
            tokenContract,
            value,
            { from: cb }
          )
          .then(res => {
            return resolve(res);
          });
      });
    });
  });
};
