const { ethers } = require("hardhat");

async function main() {
  try {
    const initBalance = 1; // 1 Ether in Wei

    const UniqueFrontendIntegrationContract = await ethers.getContractFactory("UniqueFrontendIntegrationContract");
    console.log("Contract factory created");

    const contract = await UniqueFrontendIntegrationContract.deploy(initBalance);
    console.log("Contract deployment initiated");

    // This step might not be necessary, but let's keep it for now
    await contract.waitForDeployment();
    console.log("Contract deployed successfully");
    const targetAddress = contract.target;
    console.log(`Deployed to ${targetAddress}`);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exitCode = 1;
  }
}

main();
