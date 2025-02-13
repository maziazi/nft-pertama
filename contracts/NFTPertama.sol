// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTPertama is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("NFTPertama", "NFT1") {
        tokenCounter = 0;
    }

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _mint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter++;
        return newTokenId;
    }
}