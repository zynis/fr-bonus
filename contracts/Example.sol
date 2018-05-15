pragma solidity ^0.4.19;

import "./IUserStorage.sol";
import "./FRBonus.sol";

contract Example {
  address public userStorage; // user storage address

  uint256 public maxFRBonus = 20; // Max bonus
  uint64 public maxFR = 500; // Maximum FR

  uint256 public price = 1000; // price in tokens for 1 ETH

  function Example(address _userStorage) public {
    userStorage = _userStorage; // user storage address
  }

  /*
    Returns tokens amount with bonus for provided ETH amount
  */
  function getAmount(uint256 _eth) public view returns (uint256) {
    // let's calculate bonus for user
    uint256 bonus = FRBonus.getBonus(maxFR, IUserStorage(userStorage).getFR(msg.sender), maxFRBonus);

    // let's calculate token amount without bonus
    uint256 tokenAmount = _eth * price;
    uint256 bonusAmount = tokenAmount * bonus / 100;

    return tokenAmount + bonusAmount;
  }
}
