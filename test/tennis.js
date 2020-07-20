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
    if (this.isScoreDifference()) {
      if (this.isReadyForGamePoint()) {
        if (
          Math.abs(
            this._firstPlayerScoreTimes - this._secondPlayerScoreTimes
          ) === 2
        )
          return this.advPlayer() + " Win"
        return this.advScore()
      }
      return this.mappingScore()
    }
    return this.isDeuce() ? this.deuceScore() : this.sameScore()
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

  isDeuce() {
    return this._firstPlayerScoreTimes >= 3
  }

  deuceScore() {
    return "Deuce"
  }

  sameScore() {
    return this.scoreMapping[this._firstPlayerScoreTimes] + " All"
  }

  mappingScore() {
    return (
      this.scoreMapping[this._firstPlayerScoreTimes] +
      " " +
      this.scoreMapping[this._secondPlayerScoreTimes]
    )
  }

  isScoreDifference() {
    return this._firstPlayerScoreTimes !== this._secondPlayerScoreTimes
  }

  firstPlayerScore() {
    this._firstPlayerScoreTimes++
  }

  secondPlayerScore() {
    this._secondPlayerScoreTimes++
  }
}
