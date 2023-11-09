const hre = require("hardhat");

async function main() {
  // const BooToken = await hre.ethers.getContractFactory("BooToken");
  // const booToken = await BooToken.deploy();
  // console.log(` BooToken deployed contract Address ${booToken.address}`);
  //
  // const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  // const lifeToken = await LifeToken.deploy();
  // console.log(` LifeToken deployed contract Address ${lifeToken.address}`);
  //
  // const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken");
  // const singleSwapToken = await SingleSwapToken.deploy();
  // console.log(` SingleSwapToken deployed contract Address ${singleSwapToken.address}`);
  //
  //
  // const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  // const swapMultiHop = await SwapMultiHop.deploy();
  // console.log(` SwapMultiHop deployed contract Address ${swapMultiHop.address}`);

  const UserStorageData = await hre.ethers.getContractFactory("UserStorageData");
  const userStorageData = await UserStorageData.deploy();
  console.log(` deployed contract Address ${userStorageData.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
