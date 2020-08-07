export class Tennis {
  _firstPlayerScoreTimes = 0

  scoreMapping = { 2: "Thirty", 1: "Fifteen", 3: "Forty", 0: "Love" }
  _secondPlayerScoreTimes = 0

  firstPlayerName = "Joey"
  secondPlayerName = "Tom"

  score() {
    return this.isScoreDiff()
      ? this.isEndGamePoint()
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
      Math.abs(this._secondPlayerScoreTimes - this._firstPlayerScoreTimes) === 2
    )
  }

  isEndGamePoint() {
    return this._firstPlayerScoreTimes >= 4 || this._secondPlayerScoreTimes >= 4
  }

  advScore() {
    return this.advPlayer() + " Adv"
  }

  advPlayer() {
    return this._firstPlayerScoreTimes > this._secondPlayerScoreTimes
      ? this.firstPlayerName
      : this.secondPlayerName
  }

  sameScore() {
    return this.scoreMapping[this._firstPlayerScoreTimes] + " All"
  }

  isDeuce() {
    return this._firstPlayerScoreTimes >= 3
  }

  deuceScore() {
    return "Deuce"
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
