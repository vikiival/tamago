// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library DateTimeUtils {

    uint constant SECONDS_PER_DAY = 24 * 60 * 60;

    function diffDays(uint fromTimestamp, uint toTimestamp) internal pure returns (uint _days) {
        require(fromTimestamp <= toTimestamp);
        _days = (toTimestamp - fromTimestamp) / SECONDS_PER_DAY;
    }
  
    function minDate(uint timestamp) internal pure returns (uint newTimestamp) {
        uint secs = timestamp % SECONDS_PER_DAY;
        newTimestamp = timestamp - secs;
    }

    function isNextDay(uint fromTimestamp, uint toTimestamp) internal pure returns (bool) {
        return diffDays(fromTimestamp, toTimestamp) == 1;
    }


}