import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x582D06e597b08DAe1dF51BE5a5Ca241e50aF2113"; // Ganti dengan alamat kontrak hasil deploy
  const nftPertama = await ethers.getContractAt("NFTPertama", contractAddress);

  const recipientAddress = "0x0a74AcEfaf1887337Af8FBCdFB0864a943ce1AeF"; // Ganti dengan alamat wallet penerima NFT
  const tokenURI = "ipfs://bafybeifv5ilgl6trzn5bbud4qlbnhp6dfc26k6hj2nsbrlwc76uth5uy2i"; // Ganti dengan CID gambar di IPFS

  console.log("Memulai proses mint NFT...");
  const tx = await nftPertama.mintNFT(recipientAddress, tokenURI);
  await tx.wait();

  console.log(`NFT berhasil di-mint ke alamat ${recipientAddress}`);
}

main().catch((error) => {
  console.error("Terjadi kesalahan saat minting:", error);
  process.exitCode = 1;
});
