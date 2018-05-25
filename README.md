# ICO bonus based on Wings FR

This repository explains how to give bonus to ICO participaints based on participant FR (Forecasting Raiting), contains examples and library for usage and integrate to your ICO contracts.

## Introduction

Each forecaster on WINGS has a Forecast Rating (FR) which is a reputation score based on the ability to accurately forecast the sale of tokens or coins in a crowdfunding event, this score can be increasing or decreasing with time based decay and forecasts accuracy. Based on this FR we can give additional bonus to people, who hold have high FR scores. 

The WINGS FR score hypothetically is a proxy for effort and analytical capability as it is rewarded for from high participation in evaluating ICOs and consistent ability to predict sales outcomes. Simply put it is a key performance metric for ranking personnel or algorithms (we do not assume that all WINGS forecasters are "people") in a decentralized sales forecasting organization.

The repo contains explanations on how to give a bonus for such participants, including a library that calculates bonus based on max FR (you can find the current max FR on this community run [FR list portal](https://wings-utilities.com/)), participant FR and max bonus.

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

**Important**: Test Example.js won't work without providing User storage contract address, use default User Storage address on mainnet: `0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962`.
 
## Migrations

Standard `truffle migrations`, see details in [migrations folder](/migrations).

## Examples

Here we describe how to integrate `FRBonus` lib into a token sale or ICO contract, making it possible to give bonuses based on FR.

First what you need to do is add FRBonus library to your smart contracts, let's do it with npm:

```sh
npm install fr-bonus  
``` 

Once installed do import of `FRBonus` library and `IUserStorage` interface to your smart contracts:

```sc
import "./IUserStorage.sol";
import "./FRBonus.sol";
```

So in our libraries and contracts we now have:

 - `FRBonus`:
   - `getBonus(uint64 _maxFr, uint64 _usrFR, uint256 _maxBonus) public returns (uint256)` - Function that returns bonus, based on maximum FR (you can take it from FR list portal), user FR (take from IUserStorage), and max bonus you are ready to provide (in percents, e.g. 1%-100%). Returns bonus in percent.
 - `IUserStorage`:
   - `getFR(address _account) public constant returns(uint64 FR)` - Takes user account address and returns FR of this account.

**Important**: `IUserStorage` interface should be initialize by `User Storage` address deployed on Ethereum's mainnet network. The address is: `0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962`.

Let's try to add it to our code so:

```sc
uint256 public maxFRBonus = 20; // Max bonus we are ready to allocate
uint64 public maxFR = 771; // Maximum FR take from FR list portal - https://wings-utilities.com/

uint256 bonus = FRBonus.getBonus(maxFR, IUserStorage(userStorage).getFR(msg.sender), maxFRBonus); // take a bonus, will be some percent %.
```

This is how we get the FR of a participant:

```sc
IUserStorage(userStorage).getFR(msg.sender)
```

`userStorage` is address and should be: `0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962`.

That's all. Now you can use your bonus to increase allocation of tokens for ICO participants based on how how much WINGS FR they have achieved.

For more details look at our [example contracts](/contracts).

## License

MIT.
