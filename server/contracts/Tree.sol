//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "erc721a/contracts/ERC721A.sol";

contract Tree is ERC721A {
    string private greeting;

    constructor() ERC721A("TamagoTree", "TREE") {
      console.log("Deploying a Tree with greeting:");
    }

    function mint(uint256 _quantity) external {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        _mint(msg.sender, _quantity);
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
