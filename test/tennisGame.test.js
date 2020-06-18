import { expect } from "chai"
import { Tennis } from "./tennis"

describe("Tennis Game", () => {
  let tennis = new Tennis
  beforeEach(() => {
    tennis = new Tennis
  })

  function scoreShouldBe(value) {
    expect(tennis.score()).to.equal(value)
  }

  it("Love All", () => {
    scoreShouldBe("Love All")
  })

  it("Fifteen Love", () => {
    tennis.firstPlayerScore()
    scoreShouldBe("Fifteen Love")
  })

  function givenFirstPlayerScore(times) {
    for(let i = 0; i < times; i++) {
      tennis.firstPlayerScore()
    }
  }

  it("Thirty Love", () => {
    givenFirstPlayerScore(2)
    scoreShouldBe("Thirty Love")
  })

  it("Forty Love", () => {
    givenFirstPlayerScore(3)
    scoreShouldBe("Forty Love")
  })

  it("Love Fifteen", () => {
    tennis.secondPlayerScore()
    scoreShouldBe("Love Fifteen")
  })

  function givenSecondPlayerScore(times) {
    for(let i = 0; i < times; i++) {
      tennis.secondPlayerScore()

    }
  }

  it("Love Thirty", () => {
    givenSecondPlayerScore(2)
    scoreShouldBe("Love Thirty")
  })

  it("Fifteen All", () => {
    givenSecondPlayerScore(1)
    givenFirstPlayerScore(1)
    scoreShouldBe("Fifteen All")
  })

})