require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
},
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia:{
      url: process.env.ALCHEMY_SEPOLIA_ENDPOINT,
      accounts : [process.env.PRIVATE_KEY]
    }
  }, 
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

