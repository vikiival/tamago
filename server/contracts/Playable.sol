pragma solidity ^0.8.4;

contract Playable {

    mapping(uint256 => uint256) private _treeLevel; // from tokenId to level
    mapping(uint256 => uint) private _lastPlanted;

    function getLevel(uint256 _tokenId) public view returns (uint256) {
        return _level[_tokenId];
    }

    function getLastPlanted(uint256 _tokenId) public view returns (uint) {
        return _lastPlanted[_tokenId];
    }

    function plant(uint256 _tokenId) internal {
        _level[_tokenId] = _level;
        _lastPlanted[_tokenId] = block.number;
    }
}