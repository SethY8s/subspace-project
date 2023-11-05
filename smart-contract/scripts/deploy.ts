import hre from "hardhat";

async function main() {
  const Contract = await hre.ethers.getContractFactory("Counter");
  const contract = await Contract.deploy();

  console.log("Contract deployed to:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
