export class Tennis {
  constructor(firstPlayerName, secondPlayerName) {
    this.firstPlayerName = firstPlayerName
    this.secondPlayerName = secondPlayerName
  }

  _firstPlayerScoreTimes = 0

  scoreMapping = {
    1: "Fifteen",
    2: "Thirty",
    3: "Forty",
    0: "Love",
  }
  _secondPlayerScoreTimes = 0

  score() {
    return this.isScoreDiff()
      ? this.isMatchPoint()
        ? this.isWin()
          ? this.winScore()
          : this.advScore()
        : this.diffScore()
      : this.isDeuce()
      ? this.deuceScore()
      : this.sameScore()
  }

  deuceScore() {
    return "Deuce"
  }

  isDeuce() {
    return this._firstPlayerScoreTimes > 2
  }

  advScore() {
    return this.advPlayer() + " Adv"
  }

  winScore() {
    return this.advPlayer() + " Win"
  }

  isWin() {
    return (
      Math.abs(this._secondPlayerScoreTimes - this._firstPlayerScoreTimes) === 2
    )
  }

  isMatchPoint() {
    return this._firstPlayerScoreTimes > 3 || this._secondPlayerScoreTimes > 3
  }

  advPlayer() {
    return this._firstPlayerScoreTimes > this._secondPlayerScoreTimes
      ? this.firstPlayerName
      : this.secondPlayerName
  }

  sameScore() {
    return this.scoreMapping[this._firstPlayerScoreTimes] + " All"
  }

  diffScore() {
    return (
      this.scoreMapping[this._firstPlayerScoreTimes] +
      " " +
      this.scoreMapping[this._secondPlayerScoreTimes]
    )
  }

  isScoreDiff() {
    return this._firstPlayerScoreTimes !== this._secondPlayerScoreTimes
  }

  firstPlayerScore() {
    this._firstPlayerScoreTimes++
  }

  secondPlayerScore() {
    this._secondPlayerScoreTimes++
  }
}
