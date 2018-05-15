pragma solidity ^0.4.19;

/*
  Library for FR based bonus calculation.
*/
library FRBonus {
  /*
    Returns bonus in percents. E.g. 0-100%.
  */
  function getBonus(uint64 _maxFr, uint64 _usrFR, uint256 _maxBonus) public returns (uint256) {
    assert(_maxBonus > 0 && _maxBonus <= 100);
    assert(_maxFr > 0);

    uint256 p = _usrFR * 100 / _maxFr;

    if (p > 100) {
      p = 100;
    }

    return _maxBonus * p / 100;
  }
}
