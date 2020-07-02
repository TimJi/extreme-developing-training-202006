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

  function firstPlayerScoreTimes(times) {
    for(let i = 0; i < times; i++) {
      tennis.firstPlayerScore()
    }
  }

  it("Thirty Love", () => {
    firstPlayerScoreTimes(2)
    scoreShouldBe("Thirty Love")
  })

  it("Forty Love", () => {
    firstPlayerScoreTimes(3)
    scoreShouldBe("Forty Love")
  })

  it("Love Fifteen", () => {
    tennis.secondPlayerScore()
    scoreShouldBe("Love Fifteen")
  })

  function secondPlayerScoreTimes(times) {
    for(let i = 0; i < times; i++) {
      tennis.secondPlayerScore()
    }
  }

  it("Love Thirty", () => {
    secondPlayerScoreTimes(2)
    scoreShouldBe("Love Thirty")
  })

  it("Fifteen All", () => {
    secondPlayerScoreTimes(1)
    firstPlayerScoreTimes(1)
    scoreShouldBe("Fifteen All")
  })

  it("Thirty All", () => {
    secondPlayerScoreTimes(2)
    firstPlayerScoreTimes(2)
    scoreShouldBe("Thirty All")
  })

  it("Deuce", () => {
    secondPlayerScoreTimes(3)
    firstPlayerScoreTimes(3)
    scoreShouldBe("Deuce")
  })

  it("Deuce", () => {
    givenDeuce()
    secondPlayerScoreTimes(1)
    firstPlayerScoreTimes(1)
    scoreShouldBe("Deuce")
  })

  function givenDeuce() {
    secondPlayerScoreTimes(3)
    firstPlayerScoreTimes(3)
  }

  it("Joey Adv", () => {
    givenDeuce()
    firstPlayerScoreTimes(1)
    scoreShouldBe("Joey Adv")
  })

  it("Joey Win", () => {
    givenDeuce()
    firstPlayerScoreTimes(2)
    scoreShouldBe("Joey Win")
  })

  it("Tom Win", () => {
    givenDeuce()
    secondPlayerScoreTimes(2)
    scoreShouldBe("Tom Win")
  })

  it("Tom Adv", () => {
    givenDeuce()
    secondPlayerScoreTimes(1)
    scoreShouldBe("Tom Adv")
  })

})