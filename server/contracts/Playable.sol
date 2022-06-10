// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./DateTimeUtils.sol";
import "hardhat/console.sol";

contract Playable {

    mapping(uint256 => uint256) private _treeLevel; // from tokenId to level
    mapping(uint256 => uint) private _lastWatered; // from tokenId to last watered timestamp

    function getLevel(uint256 _tokenId) public view returns (uint256) {
        return _treeLevel[_tokenId];
    }

    function getLastPlanted(uint256 _tokenId) public view returns (uint) {
        return _lastWatered[_tokenId];
    }

    function _water(uint256 _tokenId) internal {
        require(isDayAfterWatering(_tokenId));
        _treeLevel[_tokenId] += 1;
        _lastWatered[_tokenId] = DateTimeUtils.minDate(block.timestamp);
    }

    function isDayAfterWatering(uint256 _tokenId) public pure returns (bool) {
        uint lastWatered = _lastWatered[_tokenId];
        return DateTimeUtils.isNextDay(lastWatered, block.timestamp);
    }
}