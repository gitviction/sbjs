const assert = require("chai").assert;
const SBJS = require("../index.js");
const ipfsprovider = { host: "ipfs.web3.party", port: 5001, protocol: "https" };
const HttpProvider = require("ethjs-provider-http");

describe("sbjs", () => {
  describe("constructor", () => {
    it("should function normally", done => {
      const sbjs = new SBJS({
        ipfsprovider: ipfsprovider,
        web3provider: new HttpProvider("http://localhost:8545")
      });
      assert.equal(typeof sbjs, "object");
      assert.throws(() => SBJS({}), Error); // eslint-disable-line
      done();
    });
  });
});
