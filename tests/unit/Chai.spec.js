const chai = require("chai");
const expect = chai.expect;
const asserttype = require("chai-asserttype");
chai.use(asserttype);

describe("Test Chai", () => {
  it("can test numbers", () => {
    expect(2).to.be.equal(2);
  });
});
