export class Exercices 
{
    _id
    _name
    _series
    _repeats
    _days 

    constructor(id: number, name : string, series : number, repeats : number, days: string)
    {
        this._id = id
        this._name = name
        this._series = series
        this._repeats = repeats
        this._days = days
    }
}
