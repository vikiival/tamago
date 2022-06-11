import { expect } from "chai";
import { ethers } from "hardhat";

describe("Playable", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Playable = await ethers.getContractFactory("Playable");
    const greeter = await Playable.deploy();
    await greeter.deployed();

    expect(await greeter.isDayAfterWatering()).to.equal(true);
  });
});
