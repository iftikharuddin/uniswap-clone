import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";

//BOOTOKEN
export const BooTokenAddress = "0x9A86494Ba45eE1f9EEed9cFC0894f6C5d13a1F0b";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0xC0340c0831Aa40A0791cF8C3Ab4287EB0a9705d8";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0xFf658343244c0475b9305859F1b7CDAB9784762f";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0x1c1521cf734CD13B02e8150951c3bF2B438be780";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

export const userStorageDataAddrss =
  "0x4432a6DcfAEAB227673B43C30c6fEf40eaBD5D30";
export const userStorageDataABI = userStorgeData.abi;
