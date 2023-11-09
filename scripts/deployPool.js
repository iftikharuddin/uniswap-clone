// Token addresses
shoaibAddress= '0x1Dbbf529D78d6507B0dd71F6c02f41138d828990';
rayyanAddrss= '0xf18774574148852771c2631d7d06E2A6c8b44fCA';
popUpAddress= '0x9f62EE65a8395824Ee0821eF2Dc4C947a23F0f25';

// Uniswap contract address
wethAddress= '0x32cd5ecdA7f2B8633C00A0434DE28Db111E60636';
factoryAddress= '0xbeC6419cD931e29ef41157fe24C6928a0C952f0b';
swapRouterAddress= '0x55027d3dBBcEA0327eF73eFd74ba0Af42A13A966';
nftDescriptorAddress= '0x9eb52339B52e71B1EFD5537947e75D23b3a7719B';
positionDescriptorAddress= '0x92b0d1Cc77b84973B7041CB9275d41F09840eaDd';
positionManagerAddress= '0x996785Fe937d92EDBF420F3Bf70Acc62ecD6f655';


const artifacts = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
};

// const { waffle } = require("hardhat");
const { Contract, BigNumber } = require("ethers");
const bn = require("bignumber.js");
const Web3Modal = require("web3modal");
bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const MAINNET_URL =
  "https://eth-mainnet.g.alchemy.com/v2/WVLSt5IbgWV6vZHiDtRgVZ92tx2E2zwv";

const provider = new ethers.providers.JsonRpcProvider(MAINNET_URL);

function encodePriceSqrt(reserve1, reserve0) {
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
}

const nonfungiblePositionManager = new Contract(
  positionManagerAddress,
  artifacts.NonfungiblePositionManager.abi,
  provider
);

const factory = new Contract(
  factoryAddress,
  artifacts.UniswapV3Factory.abi,
  provider
);

async function deployPool(token0, token1, fee, price) {
  const [owner] = await ethers.getSigners();
  // const MAINNET_URL = "test network url";
  //
  // const WALLET_ADDRESS = "your";
  // const WALLET_SECRET = "your";
  // const provider = new ethers.providers.JsonRpcProvider(MAINNET_URL);
  // const wallet = new ethers.Wallet(WALLET_SECRET);
  // const signer = wallet.connect(provider);
  const create = await nonfungiblePositionManager
    .connect(owner)
    .createAndInitializePoolIfNecessary(token0, token1, fee, price, {
      gasLimit: 5000000,
    });

  console.log(create);
  const poolAddress = await factory
    .connect(owner)
    .getPool(token0, token1, fee);
  return poolAddress;
}

async function main() {
  const shoRay = await deployPool(
    popUpAddress,
    rayyanAddrss,
    3000,
    encodePriceSqrt(1, 1)
  );

  console.log("SHO_RAY=", `'${shoRay}'`);
}

/*
  npx hardhat run --network goerli scripts/deployPool.js
  */

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
