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

  it("Deuce", () => {
    givenFirstPlayerScore(4)
    givenSecondPlayerScore(4)
    scoreShouldBe("Deuce")
  })

  it("Joey Adv", () => {
    givenFirstPlayerScore(4)
    givenSecondPlayerScore(3)
    scoreShouldBe("Joey Adv")
  })

  it("Joey Win", () => {
    givenFirstPlayerScore(5)
    givenSecondPlayerScore(3)
    scoreShouldBe("Joey Win")
  })

  it("Tom Adv", () => {
    givenFirstPlayerScore(3)
    givenSecondPlayerScore(4)
    scoreShouldBe("Tom Adv")
  })
})
