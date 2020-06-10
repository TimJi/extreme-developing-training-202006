const {expect} = require("chai");
import {Tennis} from "./tennis.js"
// import {expect} from "chai";

// class Tennis {
//   score() {
//     return "Love All";
//   }
// }

describe("TennisGame", () => {
  it("Love All", () => {
    let tennis = new Tennis();
    expect(tennis.score()).to.equal("Love All")
  })
})