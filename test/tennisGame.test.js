import { expect } from "chai"
import { Tennis } from "./tennis"

describe("Tennis Game", () => {
  let tennis = new Tennis("Joey", "Tom")
  beforeEach(() => {
    tennis = new Tennis("Joey", "Tom")
  })

  function scoreShouldBe(expected) {
    expect(tennis.score()).to.equal(expected)
  }

  it("Love All", () => {
    scoreShouldBe("Love All")
  })

  it("Fifteen Love", () => {
    givenFirstPlayerScore(1)
    scoreShouldBe("Fifteen Love")
  })

  function givenFirstPlayerScore(times) {
    for (let i = 0; i < times; i++) {
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
    givenSecondPlayerScore(1)
    scoreShouldBe("Love Fifteen")
  })

  function givenSecondPlayerScore(times) {
    for (let i = 0; i < times; i++) {
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

  it("Thirty All", () => {
    givenSecondPlayerScore(2)
    givenFirstPlayerScore(2)
    scoreShouldBe("Thirty All")
  })

  it("Deuce", () => {
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(3)
    scoreShouldBe("Deuce")
  })

  it("Deuce", () => {
    givenSecondPlayerScore(4)
    givenFirstPlayerScore(4)
    scoreShouldBe("Deuce")
  })

  it("Joey Adv", () => {
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(4)
    scoreShouldBe("Joey Adv")
  })

  it("Joey Win", () => {
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(5)
    scoreShouldBe("Joey Win")
  })

  it("Tom Adv", () => {
    givenSecondPlayerScore(4)
    givenFirstPlayerScore(3)
    scoreShouldBe("Tom Adv")
  })
})
