export default class User
{
    _name
    _password
    _id
    _email

    constructor(name : string, password: string, id: number, email: string)
    {
        this._name = name
        this._password = password
        this._id = id
        this._email = email

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
