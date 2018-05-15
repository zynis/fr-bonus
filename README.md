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

**Important**: Test Example.js woun't work without provided User storage contract address, use default User Storage address on mainnet: 0x94B2F026A75BE2556C78A6D1f573bD79Fdfb1962.
 
## Migrations

Standard truffle migrations, see details in [migrations folder](/migrations).

## Examples

## License

MIT.
