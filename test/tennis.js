export class Tennis {
  _firstPlayerScoreTimes = 0
  scoreMapping = {
    0: "Love",
    1: "Fifteen",
    2: "Thirty",
    3: "Forty"
  }
  _secondPlayerScoreTimes = 0

  score() {
    if(this.isScoreDifferent()) {
      if(this.isReadyForGamePoint())
        return this.isWin() ? `${this.advPlayer()} Win` : `${this.advPlayer()} Adv`
      return this.mappingScore()
    }
    if(this.isDeuce()) return this.deuceScore()
    return this.sameScore()
  }

  isWin() {
    return Math.abs(this._firstPlayerScoreTimes - this._secondPlayerScoreTimes) === 2
  }

  isReadyForGamePoint() {
    return this._firstPlayerScoreTimes >= 3 && this._secondPlayerScoreTimes >= 3
  }

  deuceScore() {
    return "Deuce"
  }

  isDeuce() {
    return this._firstPlayerScoreTimes >= 3
  }

  sameScore() {
    return `${this.scoreMapping[this._firstPlayerScoreTimes]} All`
  }

  isScoreDifferent() {
    return this._firstPlayerScoreTimes !== this._secondPlayerScoreTimes
  }

  mappingScore() {
    return `${this.scoreMapping[this._firstPlayerScoreTimes]} ${this.scoreMapping[this._secondPlayerScoreTimes]}`
  }

  firstPlayerScore() {
    this._firstPlayerScoreTimes++
  }

  secondPlayerScore() {
    this._secondPlayerScoreTimes++
  }

  advPlayer() {
    return this._firstPlayerScoreTimes > this._secondPlayerScoreTimes ? "Joey" : "Tom"
  }
}