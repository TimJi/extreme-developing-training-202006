export class Tennis {
  firstPlayerScoreTimes = 0
  scoreMapping = {
    1: "Fifteen",
    0: "Love",
    2: "Thirty",
    3: "Forty",
  }
  secondPlayerScoreTimes = 0
  firstPlayerName

  constructor(firstPlayerName, secondPlayerName) {
    this.firstPlayerName = firstPlayerName
    this.secondPlayerName = secondPlayerName
  }

  score() {
    return this.isScoreDiff()
      ? this.isMatchPoint()
        ? this.isAdv()
          ? this.advScore()
          : this.winScore()
        : this.diffScore()
      : this.isDeuce()
      ? this.dueceScore()
      : this.sameScore()
  }

  advScore() {
    return this.advPlayer() + " Adv"
  }

  isAdv() {
    return Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1
  }

  isMatchPoint() {
    return this.firstPlayerScoreTimes > 2 && this.secondPlayerScoreTimes > 2
  }

  winScore() {
    return this.advPlayer() + " Win"
  }

  advPlayer() {
    return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes ? this.firstPlayerName : this.secondPlayerName
  }

  isDeuce() {
    return this.firstPlayerScoreTimes > 2
  }

  dueceScore() {
    return "Deuce"
  }

  sameScore() {
    return this.scoreMapping[this.firstPlayerScoreTimes] + " All"
  }

  diffScore() {
    return this.scoreMapping[this.firstPlayerScoreTimes] + " " + this.scoreMapping[this.secondPlayerScoreTimes]
  }

  isScoreDiff() {
    return this.firstPlayerScoreTimes !== this.secondPlayerScoreTimes
  }

  firstPlayerScore() {
    this.firstPlayerScoreTimes++
  }

  secondPlayerScore() {
    this.secondPlayerScoreTimes++
  }
}
