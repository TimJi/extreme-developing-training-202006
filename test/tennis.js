export class Tennis {
  _firstPlayerScoreTimes = 0
  scoreMapping = {
    0: "Love",
    1: "Fifteen",
    3: "Forty",
    2: "Thirty"
  }
  _secondPlayerScoreTimes = 0

  score() {
    if(this.isScoreDifference())
      return (this._firstPlayerScoreTimes > 3) ? "Joey Adv" : this.mappingScore()
    if(this.isScoreSame()) {
      if(this.isDeuce()) {
        return this.deuceScore()
      }
      return this.sameScore()
    }
  }

  sameScore() {
    return `${this.scoreMapping[this._firstPlayerScoreTimes]} All`
  }

  deuceScore() {
    return "Deuce"
  }

  isDeuce() {
    return this._firstPlayerScoreTimes >= 3
  }

  mappingScore() {
    return `${this.scoreMapping[this._firstPlayerScoreTimes]} ${this.scoreMapping[this._secondPlayerScoreTimes]}`
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

  isScoreSame() {
    return !this.isScoreDifference()
  }
}