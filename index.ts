type Point={
    name: string;
    age: number;
    salary: number;
}

function getDetails(pt : Point):Point{
    return pt;
}

getDetails({name:'Taufique',age: 23,salary: 23000});


type User ={
   readonly _id: string // read only
   name: string
   email : string
   isActive : boolean
   creditCardDetails?: number //optional

}

let myUser: User={
    _id: '1234',
    name: 'H',
    email: 'tau@gamil.com',
    isActive: false
}

myUser.email = 'tau@123gmail.com'


type cardNumber={
    cardnumber: string

}

type cardDate={
    cardDate: string
}

type cardDetails= cardNumber & cardDate & {
    cvv: number
}