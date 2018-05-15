const FRBonus = artifacts.require("./FRBonus.sol")
const ExampleNoStorage = artifacts.require("./ExampleNoStorage.sol")

module.exports = async (deployer) => {
  //process.env.USER_STORAGE
  await deployer.deploy(FRBonus)
  await deployer.link(FRBonus, ExampleNoStorage)
  await deployer.deploy(ExampleNoStorage)
};
