import { expect } from "chai"
import { Tennis } from "./tennis"

describe("tennis game", () => {
  let tennis = new Tennis("joey", "tom")
  beforeEach(() => {
    tennis = new Tennis("joey", "tom")
  })

  function scoreShouldBe(expected) {
    expect(tennis.score()).to.equal(expected)
  }

  it("love all", () => {
    scoreShouldBe("love all")
  })

  it("fifteen love", () => {
    givenFirstPlayerScore(1)
    scoreShouldBe("fifteen love")
  })

  function givenFirstPlayerScore(times) {
    for (let i = 0; i < times; i++) {
      tennis.firstPlayerScore()
    }
  }

  it("thirty love", () => {
    givenFirstPlayerScore(2)
    scoreShouldBe("thirty love")
  })

  it("forty love", () => {
    givenFirstPlayerScore(3)
    scoreShouldBe("forty love")
  })

  it("love fifteen", () => {
    givenSecondPlayerScore(1)
    scoreShouldBe("love fifteen")
  })

  function givenSecondPlayerScore(times) {
    for (let i = 0; i < times; i++) {
      tennis.secondPlayerScore()
    }
  }

  it("love thirty", () => {
    givenSecondPlayerScore(2)
    scoreShouldBe("love thirty")
  })

  it("fifteen all", () => {
    givenSecondPlayerScore(1)
    givenFirstPlayerScore(1)
    scoreShouldBe("fifteen all")
  })

  it("thirty all", () => {
    givenSecondPlayerScore(2)
    givenFirstPlayerScore(2)
    scoreShouldBe("thirty all")
  })

  it("deuce", () => {
    givenDeuce()
    scoreShouldBe("deuce")
  })

  function givenDeuce() {
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(3)
  }

  it("joey adv", () => {
    givenDeuce()
    givenFirstPlayerScore(1)
    scoreShouldBe("joey adv")
  })

  it("joey win", () => {
    givenDeuce()
    givenFirstPlayerScore(2)
    scoreShouldBe("joey win")
  })

  it("tom adv", () => {
    givenDeuce()
    givenSecondPlayerScore(1)
    scoreShouldBe("tom adv")
  })
})
