const ExampleNoStorage = artifacts.require("./ExampleNoStorage.sol")
const FRBonus = require('./libs/FRBonus.js')
const BigNumber = require('bignumber.js')

contract('ExampleNoStorage', (accounts) => {
  let example
  const maxFR = 500
  const maxFRBonus = 20
  const price = 1000
  const ethAmount = web3.toWei(1, 'ether')

  before('Deploy', async () => {
    example = await ExampleNoStorage.new()
  })

  it('Should return correct bonus for test account', async () => {
    const amount = await example.getAmount(web3.toWei(1, 'ether'), 250)
    expect(web3.fromWei(amount, 'ether').toString(10), web3.toWei(1100, 'ether').toString(10))
  })

  it('Should return correct bonuses, from 0 to 501 FR', async () => {
    for (let i = 0; i <= 501; i++) {
      const amount = await example.getAmount(web3.toWei(1, 'ether'), i)
      const bonus = FRBonus.getBonus(maxFR, maxFRBonus, i)

      let tokenAmount = new BigNumber(ethAmount)
      let bonusAmount = tokenAmount.multipliedBy(bonus).dividedBy(100)
      tokenAmount = tokenAmount.plus(bonusAmount)

      expect(tokenAmount.toString(10), amount.toString(10))
    }
  })
})
