export class Tennis {
  _firstPlayerName
  _firstPlayerScoreTimes = 0
  scoreMapping = {
    1: "Fifteen",
    2: "Thirty",
    3: "Forty",
    0: "Love",
  }
  _secondPlayerScoreTimes = 0

  _secondPlayerName

  constructor(firstPlayerName, secondPlayerName) {
    this._firstPlayerName = firstPlayerName
    this._secondPlayerName = secondPlayerName
  }

  score() {
    return this.isScoreDiff()
      ? this.isReadyForGamePoint()
        ? this.isWin()
          ? this.winScore()
          : this.advScore()
        : this.mappingScore()
      : this.isDeuce()
      ? this.deuceScore()
      : this.sameScore()
  }

  isWin() {
    return (
      Math.abs(this._firstPlayerScoreTimes - this._secondPlayerScoreTimes) === 2
    )
  }

  winScore() {
    return this.advPlayer() + " Win"
  }

  isReadyForGamePoint() {
    return this._firstPlayerScoreTimes > 3 || this._secondPlayerScoreTimes > 3
  }

  advScore() {
    return this.advPlayer() + " Adv"
  }

  advPlayer() {
    return this._firstPlayerScoreTimes > this._secondPlayerScoreTimes
      ? this._firstPlayerName
      : this._secondPlayerName
  }

  deuceScore() {
    return "Deuce"
  }

  isDeuce() {
    return this._firstPlayerScoreTimes >= 3
  }

  sameScore() {
    return this.scoreMapping[this._firstPlayerScoreTimes] + " All"
  }

  isScoreDiff() {
    return this._firstPlayerScoreTimes !== this._secondPlayerScoreTimes
  }

  mappingScore() {
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
