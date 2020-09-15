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

  constructor(firstPlayerName) {
    this.firstPlayerName = firstPlayerName
  }

  score() {
    return this.isScoreDiff()
      ? this.isMatchPoint()
        ? this.isAdv()
          ? this.advScore()
          : this.winScore()
        : this.diffScore()
      : this.isDeuce()
      ? this.deuceScore()
      : this.sameScore()
  }

  isAdv() {
    return Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1
  }

  isMatchPoint() {
    return this.firstPlayerScoreTimes > 2 && this.secondPlayerScoreTimes > 2
  }

  advScore() {
    return this.advPlayer() + " Adv"
  }

  winScore() {
    return this.advPlayer() + " Win"
  }

  advPlayer() {
    let advPlayer = this.firstPlayerScoreTimes > this.secondPlayerScoreTimes ? this.firstPlayerName : "Tom"
    return advPlayer
  }

  isDeuce() {
    return this.firstPlayerScoreTimes > 2
  }

  deuceScore() {
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
