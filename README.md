# ICO bonus based on Wings FR

This repository explains how to give bonus to ICO participaints based on participant FR (Forecasting Raiting), contains examples and library for usage and integrate to your ICO contracts.

## Introduction

Each forecaster on Wings platform has FR, that can be increasing/decrasing with time and forecasts accuracy, based on it, we can give additional bonus to people, who holds large FR, and do very quality forecasts. 

This repo contains explanation how to do a bonus for such participants, include library that calculate bonus based on max FR (you can take max FR on [FR list portal](https://wings-utilities.com/)), participant FR and max bonus.

To get more details see [examples](#examples).

## Installation

Requirements:
  * Truffle
  * RPC Node (Testrpc/Parity/Get)

Installation with NPM:

  npm install fr-bonus  

## Tests

Launch:

  USER_STORAGE=0  truffle test

**Important**: Test Example.js woun't work without provided User storage contract address, use default User Storage address on mainnet: .
 
## Migrations

Standard truffle migrations, see details in [migrations folder](/migrations).

## Examples

## License

MIT.
