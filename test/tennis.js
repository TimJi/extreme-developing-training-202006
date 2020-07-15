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
    if(this.isScoreDifference()) return this.mappingScore()
    return (this.isDeuce()) ? this.deuceScore() :
      `${this.scoreMapping[this._firstPlayerScoreTimes]} All`
  }

  isDeuce() {
    return this._firstPlayerScoreTimes >= 3
  }

  deuceScore() {
    return "Deuce"
  }

  isScoreDifference() {
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
}