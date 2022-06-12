//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Playable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Tree is ERC721, Playable {
    event Planted(address indexed from, uint256 indexed id);
    using Counters for Counters.Counter;
    Counters.Counter public _tokenCounter;
    mapping(address => uint256) private _treeOwner;

    constructor() ERC721("TamagoTree", "TREE") {
      console.log("Deploying a Tree with greeting:");
    }

    function plant() external onlyOnePerUser {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        uint256 current = _tokenCounter.current();
        _mint(msg.sender, current);
        _water(current);
        _setOwnerToTree(msg.sender, current);
        _tokenCounter.increment();
    }

    function water(uint256 _tokenId) external {
        _water(_tokenId);
    }

    function _setOwnerToTree(address _owner, uint256 _tokenId) internal {
        _treeOwner[_owner] = _tokenId;
    }

    function getTreeIdByAccount(address _owner) public view returns (uint256) {
        return _treeOwner[_owner];
    }

    modifier onlyOnePerUser() { 
       require(balanceOf(msg.sender) == 0, "[TREE] Only one plant per user is allowed");
       _;
    }
}
