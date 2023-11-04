// require("@nomiclabs/hardhat-waffle");
//
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   // solidity: "0.8.20",
//   solidity: {
//     compilers: [
//       {
//         version: "0.7.6",
//         settings: {
//           evmVersion: "istanbul",
//           optimizer: {
//             enabled: true,
//             runs: 1000,
//           },
//         },
//       },
//     ],
//   },
//   networks: {
//     hardhat: {
//       forking: {
//         url: "https://eth-mainnet.g.alchemy.com/v2/WVLSt5IbgWV6vZHiDtRgVZ92tx2E2zwv",
//       },
//     },
//   },
// };

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
        details: { yul: false },
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/WVLSt5IbgWV6vZHiDtRgVZ92tx2E2zwv",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
  },
};