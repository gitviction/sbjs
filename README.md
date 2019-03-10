# StandardBountiesJS

JS lib to create bounties on gitcoin.co and/or bounties.network

# Installing

`npm i gitviction/sbjs`

# Usage

```js
const sbjs = require("sbjs");
const gitcoin = new sbjs({
  ipfsprovider: {
    host: "localhost",
    port: 5001,
    protocol: "http"
  },
  web3provider: new HttpProvider("http://localhost:8545")
});

gitcoin.issueAndActivateBounty(
        metaData,
        deadline,
        fulfillmentAmount,
        arbiter,
        paysTokens, // true/false
        tokenContract,
        value
      )
      .then(txhash => {
        // here's the txhash
      });

```
