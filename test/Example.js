const Example = artifacts.require("./Example.sol")
const IUserStorage = artifacts.require("./IUserStorage.sol")

const FRBonus = require('./libs/FRBonus.js')
const BigNumber = require('bignumber.js')

contract('Example', (accounts) => {
  let example, userStorage, fr

  const maxFR = 500
  const maxFRBonus = 20
  const price = 1000
  const ethAmount = web3.toWei(1, 'ether')

  before('Deploy', async () => {
    example = await Example.new(process.env.USER_STORAGE)
    userStorage = await IUserStorage.at(process.env.USER_STORAGE)

    fr = await userStorage.getFR(accounts[0])
  })

  it('Should return correct bonus for test account', async () => {
    const amount = await example.getAmount(web3.toWei(1, 'ether'))
    const bonus = FRBonus.getBonus(maxFR, maxFRBonus, fr)

    let tokenAmount = new BigNumber(ethAmount)
    let bonusAmount = tokenAmount.multipliedBy(bonus).dividedBy(100)
    tokenAmount = tokenAmount.plus(bonusAmount)

    expect(tokenAmount.toString(10), amount.toString(10))
  })
});
