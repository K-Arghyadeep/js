// const user = {
//     username: "dota",
//     welcome: function(){
//         console.log(`hello ${this.username}`)
//     }
// }
// user.welcome() // hello dota
// user.username = "dota2"
// user.welcome() // hello dota2

// function chai(){
//     let username = "dota"
//     console.log(this.username) // undefined
// }
// const chai = () => {
//     let username = "dota"
//     console.log(this.username) // undefined
//     console.log(this) // {}
// }
// chai()

/*
const addTwo = (num1, num2) => (num1 + num2)
// The below function will run the same 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


console.log(addTwo(2,4))
*/

//const test = (test1, test2) => {user: "dota"} // undefined

const test = (test1, test2) => ({user: "dota"}) // {user: 'dota'}

console.log(test(2, 3))