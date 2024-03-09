const TurtlesCoin = artifacts.require("TurtlesCoin");

module.exports = function(deployer) {
  const initialSupply = '1000000' + '000000000000000000'; // 1 million tokens, considering 18 decimal places
  deployer.deploy(TurtlesCoin, initialSupply);
};
