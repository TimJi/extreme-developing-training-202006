export class Tennis {
  _firstPlayerScoreTimes
  scoreMapping = {
    1: "Fifteen",
    2: "Thirty",
    0: "Love",
    3: "Forty",
  }
  _secondPlayerScoreTimes = 0

  _firstPlayerName

  _secondPlayerName

  _firstPlayerScoreTimes = 0

  constructor(firstPlayerName, secondPlayerName) {
    this._firstPlayerName = firstPlayerName
    this._secondPlayerName = secondPlayerName
  }

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

  winScore() {
    return this.advPlayer() + " Win"
  }

  isWin() {
    return (
      Math.abs(this._firstPlayerScoreTimes - this._secondPlayerScoreTimes) === 2
    )
  }

  advScore() {
    return this.advPlayer() + " Adv"
  }

  advPlayer() {
    return this._firstPlayerScoreTimes > this._secondPlayerScoreTimes
      ? this._firstPlayerName
      : this._secondPlayerName
  }

  isMatchPoint() {
    return this._firstPlayerScoreTimes > 2 && this._secondPlayerScoreTimes > 2
  }

  deuceScore() {
    return "Deuce"
  }

  isDeuce() {
    return this.isMatchPoint() && !this.isScoreDiff()
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
