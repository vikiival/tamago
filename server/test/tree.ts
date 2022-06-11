import { expect } from "chai";
import { ethers } from "hardhat";

describe.only("Tree", function () {
  it("Should be a complex", async function () {
    const Tree = await ethers.getContractFactory("Tree");
    const tree = await Tree.deploy();
    await tree.deployed();
    const shouldHaveNoToken = await tree.getLevel(0);
    expect(shouldHaveNoToken).to.equal(0);
    const plantTx = await tree.plant(1);
    const tx = await plantTx.wait();
    console.log(tx.events?.filter((x) => x.event === "Transfer"));

    // const shouldHaveLevelOne = await tree.getLevel(0);
    // expect(shouldHaveLevelOne).to.equal(1);
    // const waterTx = await tree.water(1);
    // await waterTx.wait();
    // const shouldHaveLevelTwo = await tree.getLevel(2);
    // expect(shouldHaveLevelTwo).to.equal(2);
  });
});
