# NFT Minting Project on Manta Pacific Testnet
This project is a simple NFT minting project that demonstrates basic Hardhat use cases. The smart contract has been deployed to Manta Pacific Sepolia Testnet. Currently, the project only supports creating and minting NFTs.

## Network Information
Network: Manta Pacific Sepolia Testnet
RPC URL: https://pacific-rpc.sepolia-testnet.manta.network/http
Block Explorer: https://pacific-explorer.sepolia-testnet.manta.network/

## Current Functionality
✅ Create NFT (Deploy Contract)
✅ Mint NFT
❌ Transfer NFT (Belum Ada)
❌ Burn NFT (Belum Ada)

## Getting Started
Install dependencies:
`npm install`
Deploy contract to Manta Pacific Testnet:
`PRIVATE_KEY=0xYOUR_METAMASK_PRIVATE_KEY npx hardhat run scripts/deploy.ts --network mantaPacificTestnet`
Mint NFT:
`PRIVATE_KEY=0xYOUR_METAMASK_PRIVATE_KEY npx hardhat run scripts/mint.ts --network mantaPacificTestnet`
Useful Links
`Faucet: https://pacific-faucet.manta.network/`
`Block Explorer: https://pacific-explorer.sepolia-testnet.manta.network/`
Example Hardhat Commands
`npx hardhat help`
`npx hardhat test`
`npx hardhat node`

## Notes
Project is in early development. Only **create and mint functionality** is available.
Tested and deployed on **Manta Pacific Sepolia Testnet** only.

