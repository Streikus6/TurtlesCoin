require('dotenv').config(); // This line should be at the very top
const HDWalletProvider = require('@truffle/hdwallet-provider');

// Access your mnemonic from the .env file
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    // Other configurations...

    bscTestnet: {
      provider: () => new HDWalletProvider({
        mnemonic: mnemonic,
        providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        derivationPath: "m/44'/60'/0'/0/" // This is the standard Ethereum derivation path. Adjust if needed.
      }),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  
  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch any version within the 0.8 range
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }

  // Additional configurations...
};
