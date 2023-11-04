import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import 'dotenv/config';

const key = process.env.KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    subspace: {
      url: "https://domain-3.evm.gemini-3f.subspace.network/ws",
      accounts: [key],
    },
  },
};

export default config;
