const FRBonus = artifacts.require("./FRBonus.sol")
const Example = artifacts.require("./Example.sol")

module.exports = async (deployer) => {
  await deployer.deploy(FRBonus)
  await deployer.link(FRBonus, Example)

  if (process.env.EXAMPLE) {
    await deployer.deploy(Example, process.env.USER_STORAGE)
  }
};
