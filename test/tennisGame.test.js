import { expect } from "chai"
import { Tennis } from "./tennis"

describe("Tennis Game", () => {
  let tennis = new Tennis()
  beforeEach(() => {
    tennis = new Tennis()
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

  function givenSecondPlayerScore(times) {
    for (let i = 0; i < times; i++) {
      tennis.secondPlayerScore()
    }
  }

  it("Love Fifteen", () => {
    givenSecondPlayerScore(1)
    scoreShouldBe("Love Fifteen")
  })

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

  it("Joey Adv", () => {
    givenDeuce()
    givenFirstPlayerScore(1)
    scoreShouldBe("Joey Adv")
  })

  it("Tom Adv", () => {
    givenSecondPlayerScore(1)
    givenDeuce()
    scoreShouldBe("Tom Adv")
  })

  it("Deuce", () => {
    givenSecondPlayerScore(1)
    givenFirstPlayerScore(1)
    givenDeuce()
    scoreShouldBe("Deuce")
  })

  it("Joey Win", () => {
    givenFirstPlayerScore(2)
    givenDeuce()
    scoreShouldBe("Joey Win")
  })

  it("Tom Win", () => {
    givenSecondPlayerScore(2)
    givenDeuce()
    scoreShouldBe("Tom Win")
  })

  it("Tom Win", () => {
    givenSecondPlayerScore(4)
    givenFirstPlayerScore(2)
    scoreShouldBe("Tom Win")
  })
})
