const assert = require("chai").assert;
const SBJS = require("../index.js");
const ipfsprovider = { host: "ipfs.web3.party", port: 5001, protocol: "https" };

describe("sbjs", () => {
  describe("constructor", () => {
    it("should function normally", done => {
      const sbjs = new SBJS({
        ipfsprovider: ipfsprovider,
        web3provider: null
      });
      assert.equal(typeof sbjs, "object");
      assert.throws(() => SBJS({}), Error); // eslint-disable-line
      done();
    });
  });

  describe("issueAndActivateBounty", () => {
    it("should function normally", done => {
      const sbjs = new SBJS({
        ipfsprovider: ipfsprovider
      });

      //console.log(sbjs.ipfs.provider);

      sbjs
        .issueAndActivateBounty({ title: "my issue", description: "ok" })
        .then(() => {
          done();
        });

      //assert.equal(typeof ipfs.provider, 'object');
      //      assert.throws(() => SBJS({}), Error); // eslint-disable-line
      //      done();
    });
  });
});
