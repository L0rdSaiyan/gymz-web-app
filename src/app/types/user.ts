import { Exercices } from "./exercices"

export class User
{
    _name
    _password
    _id
    _email
    _exercices

    constructor(name : string, password: string, id: number, email: string, exercices? : Exercices[])
    {
        this._name = name
        this._password = password
        this._id = id
        this._email = email
        this._exercices = exercices || null

    }
    

    get name()
    {
        return this._name
    }

    get password()
    {
        return this._password
    }

    get id()
    {
        return this._id
    }

    get email()
    {
        return this._email
    }

}

//criar 






// interface AttributesTypes
// {
//     name : string,
//     password : string
// }

// export default class User{
    
//     _name
//     _password

//     constructor(name :string, password : string)
//     {
//         this._name = name
//         this._password = password
//     }

//     get name()
//     {
//         console.log('aoba')
//         return this._name
//     }

//     get password()
//     {
//         console.log('pass')
//         return this._password
//     }

// }

// class LegalEBunito {
//     constructor(massaInicial) {
//         this._massa = massaInicial;
//     }

//     get massa() {
//         console.log('aoba');
//         return this._massa;
//     }

//     set massa(value) {
//         this._massa = value;
//     }

//     toJSON() {
//         return JSON.stringify({ massa: this.massa });
//     }
// }
