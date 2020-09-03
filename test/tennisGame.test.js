import { expect } from "chai"
import { Tennis } from "./tennis"

describe("Tennis Game", () => {
  let tennis = new Tennis("Joey", "Tom")
  beforeEach(() => {
    tennis = new Tennis("Joey", "Tom")
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
    tennis.secondPlayerScore()
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

  function givenDeuce() {
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(3)
  }

  it("Deuce", () => {
    givenDeuce()
    scoreShouldBe("Deuce")
  })

  it("Deuce", () => {
    givenDeuce()
    givenSecondPlayerScore(1)
    givenFirstPlayerScore(1)
    scoreShouldBe("Deuce")
  })

  it("Joey Adv", () => {
    givenDeuce()
    givenFirstPlayerScore(1)
    scoreShouldBe("Joey Adv")
  })

  it("Joey Win", () => {
    givenDeuce()
    givenFirstPlayerScore(2)
    scoreShouldBe("Joey Win")
  })

  it("Tom Adv", () => {
    givenDeuce()
    givenSecondPlayerScore(1)
    scoreShouldBe("Tom Adv")
  })
})
