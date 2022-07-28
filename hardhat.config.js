require("@nomiclabs/hardhat-waffle");
const projectId=" 142390bb4b60443593523bf5025b23bc"
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/${projectId}' ,
      accounts: []
    }
  },
  solidity: "0.8.9",
};
