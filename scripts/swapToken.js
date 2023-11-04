//NEW MULTIHOP
const { waffle } = require("hardhat");
const { Contract, BigNumber } = require("ethers");

const swapMulti = require("../Context/SwapMultiHop.json");
const rayyanabi = require("../Context/IWETH.json");
const address = "0x959922be3caee4b8cd9a407cc3ac1c251c2007b1";

const fetchMultiHopContract = (signerOrProvider) =>
  new ethers.Contract(address, swapMulti.abi, signerOrProvider);

//CONNECTING With SingleSwapToken TOKEN CONTRACT
const connectingWithMultiHopContract = async () => {
  try {
    const [signer] = await ethers.getSigners();
    const privider = waffle.provider;
    const contract = fetchMultiHopContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
const rayyan = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
const fetchDAIContract = (signerOrProvider) =>
  new ethers.Contract(rayyan, rayyanabi.abi, signerOrProvider);

//CONNECTING With SingleSwapToken TOKEN CONTRACT
const connectingWithDAIToken = async () => {
  try {
    const [signer] = await ethers.getSigners();
    const contract = fetchDAIContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

const singleSwapToken = async () => {
  try {
    const [signer] = await ethers.getSigners();
    let singleSwapToken;
    let weth;
    let dai;

    const token1 = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
    const token2 = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
    const fee = 3000;

    singleSwapToken = await connectingWithMultiHopContract();
    weth = await connectingWithDAIToken();

    const decimals0 = 18;
    const inputAmount = 1000;
    const amountIn = ethers.utils.parseUnits(inputAmount.toString(), decimals0);

    await weth.approve(singleSwapToken.address, amountIn);

    //SWAP
    const transaction = await singleSwapToken.swapExactInputMultihop(
      token1,
      token2,
      amountIn,
      {
        gasLimit: 300000,
      }
    );

    await transaction.wait();
    console.log(transaction);

    const balance = await weth.balanceOf(signer.address);
    const transferAmount = BigNumber.from(balance).toString();
    const ethValue = ethers.utils.formatEther(transferAmount);
    console.log("Rayyan", ethValue);
  } catch (error) {
    console.log(error);
  }
};

singleSwapToken();
