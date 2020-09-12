export class Tennis {
  firstPlayerScoreTimes = 0
  scoreMapping = {
    1: "fifteen",
    0: "love",
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

  winScore() {
    return this.advPlayer() + " win"
  }

  advScore() {
    return this.advPlayer() + " adv"
  }

  isAdv() {
    return (
      Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1
    )
  }

  isMatchPoint() {
    return this.firstPlayerScoreTimes > 2 && this.secondPlayerScoreTimes > 2
  }

  advPlayer() {
    return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes
      ? this.firstPlayerName
      : this.secondPlayerName
  }

  sameScore() {
    return this.scoreMapping[this.firstPlayerScoreTimes] + " all"
  }

  isDeuce() {
    return this.firstPlayerScoreTimes > 2
  }

  deuceScore() {
    return "deuce"
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
