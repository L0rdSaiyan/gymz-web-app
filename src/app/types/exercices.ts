export class Exercices {
    private _id;
    private _name;
    private _series;
    private _repeats;
    private _days;
  
    constructor(id: number, name: string, series: number, repeats: number, days: string) {
      this._id = id;
      this._name = name;
      this._series = series;
      this._repeats = repeats;
      this._days = days;
    }
  
    get id() {
      return this._id;
    }
  
    get name() {
      return this._name;
    }
  
    get series() {
      return this._series;
    }
  
    get repeats() {
      return this._repeats;
    }
  
    get days() {
      return this._days;
    }
  }
  