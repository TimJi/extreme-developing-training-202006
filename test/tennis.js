export class Tennis {
  constructor() {
    this._firstPlayerScoreTimes = 0
    this._secondPlayerScoreTimes = 0
    this.scoreMapping = {
      0: "Love",
      1: "Fifteen",
      2: "Thirty",
      3: "Forty"
    }
  }

  score() {
    if(this._firstPlayerScoreTimes >= 3) return "Deuce"
    if(this.isScoreDifference()) return this.mapScore()
    return this.sameScore()
  }

  sameScore() {
    return `${this.scoreMapping[this._secondPlayerScoreTimes]} All`
  }

  mapScore() {
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
}