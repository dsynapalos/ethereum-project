var Contract = artifacts.require("./SimpleContract.sol")

module.exports = function(deployer) {
  deployer.deploy(Hello);
};
