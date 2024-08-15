type User = {
   readonly name:string,
    age:number,
    isActive:boolean
    creditCardDetails?:number,
    readonly rank?:Array<number>
}
 let newUser:User = {
     name: "hello",
     age: 0,
     isActive: false,
     rank:[1,23]
 }
 newUser.age = 20;
 newUser.rank?.push(3);

 console.log(newUser); /*{ name: 'hello', age: 20, isActive: false, rank: [ 1, 23, 3 ] } */
 
//  newUser.name = "hello2"

// const createUser = (user:User):User => {
//     return {
//         name:"bh",
//         age:45,
//         isActive:true
//     }
// }
// createUser({name:"y",age:34,isActive:false,creditCardDetails:1234})

type cardName = {
    creditCardName:string,
    debitCardName:string
}
type cardNumber = {
     creditCardNumber:number,
     debitCardNumber:number
}
type cardDetails = cardName & cardNumber & {
    cvv:number
}

export {}