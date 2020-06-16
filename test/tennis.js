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
    if(this.isScoreDifference()) {
      return this.mappingScore()
    }
    return this.sameScore()
  }

  sameScore() {
    return `${this.scoreMapping[this._firstPlayerScoreTimes]} All`
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