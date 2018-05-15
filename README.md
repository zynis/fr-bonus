# ICO bonus based on Wings FR

This repository explains how to give bonus to ICO participaints based on participant FR (Forecasting Raiting), contains examples and library for usage and integrate to your ICO contracts.

## Introduction

Each forecaster on Wings platform has FR, that can be increasing/decrasing with time and forecasts accuracy, based on it, we can give additional bonus to people, who holds large FR, and do very quality forecasts. 

This repo contains explanation how to do a bonus for such participants, include library that calculate bonus based on max FR (you can take max FR on [FR list portal](https://wings-utilities.com/)), participant FR and max bonus.

To get more details see [examples](#examples).

## Installation

Requirements:

  * Nodejs
  * Truffle
  * RPC Node (Testrpc/Parity/Get)

Installation with NPM:

```sh
npm install fr-bonus  
```

## Tests

Launch:

```sh
USER_STORAGE=0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962  truffle test
```

**Important**: Test Example.js woun't work without provided User storage contract address, use default User Storage address on mainnet: `0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962`.
 
## Migrations

Standard `truffle migrations`, see details in [migrations folder](/migrations).

## Examples

This path describing example, how you can integrate `FRBonus` lib to your ICO contract and make it possible to give bonus based on FR.

First what you need to do is add FRBonus library to your smart contracts, let's do it with npm:

```sh
npm install fr-bonus  
``` 

Once installed do import of `FRBonus` library and `IUserStorage` interface to your smart contracts:

```sc
import "./IUserStorage.sol";
import "./FRBonus.sol";
```

So let's see on libraries and contracts:

 - `FRBonus`:
   - `getBonus(uint64 _maxFr, uint64 _usrFR, uint256 _maxBonus) public returns (uint256)` - Function that returns bonus, based on maximum FR (you can take it from FR list portal), user FR (take from IUserStorage), and max bonus you are ready to provide (in percents, e.g. 1%-100%). Returns bonus in percent.
 - `IUserStorage`:
   - `getFR(address _account) public constant returns(uint64 FR)` - Takes user account address and returns FR of this account.

**Important**: `IUserStorage` interface should be initialize by `User Storage` address deployed on mainnet network, address is: `0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962`.

Let's try to add it to our code so:

```sc
uint256 public maxFRBonus = 20; // Max bonus we are ready to allocate
uint64 public maxFR = 771; // Maximum FR take from FR list portal - https://wings-utilities.com/

uint256 bonus = FRBonus.getBonus(maxFR, IUserStorage(userStorage).getFR(msg.sender), maxFRBonus); // take a bonus, will be some percent %.
```

See how we take FR of participant:

```sc
IUserStorage(userStorage).getFR(msg.sender)
```

`userStorage` is address and should be: `0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962`.

It's all, then you can use your bonus to increase allocation of tokens for participant.

For more details look at our [example contracts](/contracts).

## License

MIT.
