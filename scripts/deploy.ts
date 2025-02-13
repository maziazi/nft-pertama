import { ethers } from "hardhat";

async function main() {
  const NFTPertama = await ethers.getContractFactory("NFTPertama");
  const nftPertama = await NFTPertama.deploy();

  const deploymentTx = nftPertama.deploymentTransaction();
  if (deploymentTx) {
    await deploymentTx.wait();
  } else {
    throw new Error("Deployment transaction is null");
  }

  console.log(`NFTPertama Contract deployed to: ${await nftPertama.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
