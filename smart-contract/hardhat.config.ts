import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

const key = process.env.KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  // networks: {
  //   subspace: {
  //     url: "https://domain-3.evm.gemini-3g.subspace.network/ws",
  //     accounts: [key],
  //   },
  // },
};

export default config;
