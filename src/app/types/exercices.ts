export class Exercices {
    private _exercice_id;
    private _name;
    private _series;
    private _repeats;
    private _days;
  
    constructor(exercice_id: number, name: string, series: number, repeats: number, days: string) {
      this._exercice_id = exercice_id;
      this._name = name;
      this._series = series;
      this._repeats = repeats;
      this._days = days;
    }
  
    get exercice_id() {
      return this._exercice_id;
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
  