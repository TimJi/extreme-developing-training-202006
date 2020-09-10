export class Tennis {
  firstPlayerScoreTimes = 0
  scoreMapping = {
    2: "thirty",
    3: "forty",
    1: "fifteen",
    0: "love",
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

  advScore() {
    return this.advPlayer() + " adv"
  }

  winScore() {
    return this.advPlayer() + " win"
  }

  isAdv() {
    return (
      Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1
    )
  }

  advPlayer() {
    return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes
      ? this.firstPlayerName
      : this.secondPlayerName
  }

  isMatchPoint() {
    return this.firstPlayerScoreTimes > 2 && this.secondPlayerScoreTimes > 2
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

  isScoreDiff() {
    return this.firstPlayerScoreTimes !== this.secondPlayerScoreTimes
  }

  diffScore() {
    return (
      this.scoreMapping[this.firstPlayerScoreTimes] +
      " " +
      this.scoreMapping[this.secondPlayerScoreTimes]
    )
  }

  firstPlayerScore() {
    this.firstPlayerScoreTimes++
  }

  secondPlayerScore() {
    this.secondPlayerScoreTimes++
  }
}
