var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          "https://ropsten.infura.io/v3/175ce051e4634ce7bdfefe78c35a5bb4"
        );
      },
      network_id: 3,
      gas: 7000000

      //make sure this gas allocation isn't over 4M, which is the max
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          "https://rinkeby.infura.io/v3/175ce051e4634ce7bdfefe78c35a5bb4"
        );
      },
      network_id: 4,
      gas: 7000000

      //make sure this gas allocation isn't over 4M, which is the max
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
