import { expect } from "chai"
import { Tennis } from "./tennis"

describe("tennis game", () => {
  let tennis = new Tennis("Joey", "Tom")
  beforeEach(() => {
    tennis = new Tennis("Joey", "Tom")
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
    tennis.secondPlayerScore()
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
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(3)
    scoreShouldBe("deuce")
  })

  it("deuce", () => {
    givenSecondPlayerScore(4)
    givenFirstPlayerScore(4)
    scoreShouldBe("deuce")
  })

  it("Joey adv", () => {
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(4)
    scoreShouldBe("Joey adv")
  })

  it("Joey win", () => {
    givenSecondPlayerScore(3)
    givenFirstPlayerScore(5)
    scoreShouldBe("Joey win")
  })

  it("Tom adv", () => {
    givenSecondPlayerScore(4)
    givenFirstPlayerScore(3)
    scoreShouldBe("Tom adv")
  })
})
