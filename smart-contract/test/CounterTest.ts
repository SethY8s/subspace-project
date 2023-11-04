import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Counter", function () {
  let Counter: SignerWithAddress;
  let counter: SignerWithAddress;
  let owner: SignerWithAddress;
  let addr: SignerWithAddress[];

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    [owner, addr1] = await ethers.getSigners();

    counter = await Counter.deploy();
  });

  describe("Counter operations", function () {
    it("Should return initial value of zero", async function () {
      expect(await counter.number()).to.equal(0);
    });

    it("Should set number to a new value", async function () {
      await counter.setNumber(5);
      expect(await counter.number()).to.equal(5);
    });

    it("Should increment the number", async function () {
      await counter.setNumber(5);
      await counter.increment();
      expect(await counter.number()).to.equal(6);
    });

    it("Should decrement the number", async function () {
      await counter.setNumber(5);
      await counter.decrement();
      expect(await counter.number()).to.equal(4);
    });
  });
});
