require('dotenv').config(); // This line should be at the very top
const HDWalletProvider = require('@truffle/hdwallet-provider');

// Access your mnemonic from the .env file
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    // Other configurations...

    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Additional configurations...
};
