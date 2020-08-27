export class Tennis {
  _firstPlayerScoreTimes = 0

  scoreMapping = { 1: "Fifteen", 2: "Thirty", 3: "Forty", 0: "Love" }
  _secondPlayerScoreTimes = 0

  firstPlayerName = "Joey"

  secondPlayerName = "Tom"

  score() {
    return this.scoreDiff()
      ? this.isEndGamePoint()
        ? this.isAdv()
          ? this.advScore()
          : this.winScore()
        : this.diffScore()
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

  advScore() {
    return this.advPlayer() + " Adv"
  }

  advPlayer() {
    return this._secondPlayerScoreTimes > this._firstPlayerScoreTimes
      ? this.secondPlayerName
      : this.firstPlayerName
  }

  isAdv() {
    return (
      Math.abs(this._secondPlayerScoreTimes - this._firstPlayerScoreTimes) === 1
    )
  }

  isEndGamePoint() {
    return this._firstPlayerScoreTimes >= 3 && this._secondPlayerScoreTimes >= 3
  }

  isDeuce() {
    return (
      this._firstPlayerScoreTimes === this._secondPlayerScoreTimes &&
      this.isEndGamePoint()
    )
  }

  deuceScore() {
    return "Deuce"
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

  scoreDiff() {
    return this._firstPlayerScoreTimes !== this._secondPlayerScoreTimes
  }

  firstPlayerScore() {
    this._firstPlayerScoreTimes++
  }

  secondPlayerScore() {
    this._secondPlayerScoreTimes++
  }
}
