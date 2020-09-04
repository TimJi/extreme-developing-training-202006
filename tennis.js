export class Tennis {
  _firstPlayerScoreTimes = 0
  scoreMapping = {
    1: "Fifteen",
    2: "Thirty",
    3: "Forty",
    0: "Love",
  }
  _secondPlayerScoreTimes = 0
  _firstPlayerName
  _secondPlayerName

  constructor(firstPlayerName, secondPlayerName) {
    this._firstPlayerName = firstPlayerName
    this._secondPlayerName = secondPlayerName
  }

  score() {
    return this.isScoreDiff()
      ? this.isMatchPoint()
        ? this.isAdv()
          ? this.advScore()
          : this.winScore()
        : this.diffScore()
      : this.isMatchPoint()
      ? this.deuceScore()
      : this.sameScore()
  }

  winScore() {
    return this.advPlayer() + " Win"
  }

  isAdv() {
    return (
      Math.abs(this._firstPlayerScoreTimes - this._secondPlayerScoreTimes) === 1
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

  sameScore() {
    return this.scoreMapping[this._firstPlayerScoreTimes] + " All"
  }

  isScoreDiff() {
    return this._firstPlayerScoreTimes !== this._secondPlayerScoreTimes
  }

  diffScore() {
    return (
      this.scoreMapping[this._firstPlayerScoreTimes] +
      " " +
      this.scoreMapping[this._secondPlayerScoreTimes]
    )
  }

  firstPlayerScore() {
    this._firstPlayerScoreTimes++
  }

  secondPlayerScore() {
    this._secondPlayerScoreTimes++
  }
}
