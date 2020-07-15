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

  it("Fifteen All", () => {
    givenFirstPlayerScore(1)
    givenSecondPlayerScore(1)
    scoreShouldBe("Fifteen All")
  })

  it("Thirty All", () => {
    givenFirstPlayerScore(2)
    givenSecondPlayerScore(2)
    scoreShouldBe("Thirty All")
  })

  it("Deuce", () => {
    givenFirstPlayerScore(3)
    givenSecondPlayerScore(3)
    scoreShouldBe("Deuce")
  })

  function givenDeuce() {
    givenFirstPlayerScore(3)
    givenSecondPlayerScore(3)
  }

  it("Joey Adv", () => {
    givenDeuce()
    givenFirstPlayerScore(1)
    scoreShouldBe("Joey Adv")
  })

  it("Fifteen Love", () => {
    tennis.firstPlayerScore()
    scoreShouldBe("Fifteen Love")
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

})