export class Tennis {
  firstPlayerScoreTimes = 0
  scoreMapping = {
    0: "love",
    1: "fifteen",
    2: "thirty",
    3: "forty",
  }
  secondPlayerScoreTimes = 0
  firstPlayerName
  secondPlayerName

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
      ? this.deuceScore()
      : this.sameScore()
  }

  isMatchPoint() {
    return this.firstPlayerScoreTimes > 2 && this.secondPlayerScoreTimes > 2
  }

  isAdv() {
    return (
      Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1
    )
  }

  winScore() {
    return this.advPlayer() + " win"
  }

  advScore() {
    return this.advPlayer() + " adv"
  }

  advPlayer() {
    return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes
      ? this.firstPlayerName
      : this.secondPlayerName
  }

  isDeuce() {
    return this.firstPlayerScoreTimes > 2
  }

  deuceScore() {
    return "deuce"
  }

  sameScore() {
    return this.scoreMapping[this.firstPlayerScoreTimes] + " all"
  }

  diffScore() {
    return (
      this.scoreMapping[this.firstPlayerScoreTimes] +
      " " +
      this.scoreMapping[this.secondPlayerScoreTimes]
    )
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
