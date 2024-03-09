const TurtlesCoin = artifacts.require("TurtlesCoin");

contract("TurtlesCoin", (accounts) => {
  it("should deploy with the correct initial supply", async () => {
    const instance = await TurtlesCoin.deployed();
    const totalSupply = await instance.totalSupply();

    assert.equal(totalSupply.toString(), web3.utils.toWei("1000000", "ether"), "The initial supply was not as expected");
  });

  it("should assign the initial supply to the creator's account", async () => {
    const instance = await TurtlesCoin.deployed();
    const adminBalance = await instance.balanceOf(accounts[0]);

    assert.equal(adminBalance.toString(), web3.utils.toWei("1000000", "ether"), "The initial supply was not assigned to the creator");
  });

  // Add more tests here as needed
});