pragma solidity ^0.4.19;

// Central storage for accounts abstraction. Owned by Wings
contract IUserStorage {
    // Gets FR by address
    function getFR(address _account)
        public constant returns(uint64 FR);
}
