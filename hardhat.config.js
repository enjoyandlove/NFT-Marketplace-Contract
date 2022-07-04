
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
const {bscscan_api_key, appkey, private_key, etherscan_api_key} = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:`,
      accounts: [private_key],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${appkey}`,
      accounts: [private_key],
    }
  },
  etherscan: {
    apiKey: etherscan_api_key,
  }
};
