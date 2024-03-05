const sym = Symbol("key")

// // object literals
const js_user = {
    name: "Dota",
    [sym]: "key123",// the original symbol which has been declared.
    sym: "key123",// creates a new property of the object called sym as a string
    age: 20,
    location: "International",
    email: "support@dota.com",
    is_down: false,
    platforms: ["PC","Console"]
}

// // getting values from an array
// // my_array = [2,4,6,7]
// // third_element = my_array[2]


// // getting values from an object
// // console.log(js_user.name)
// // console.log(js_user["platforms"])

// // js_user.is_down = true
// // console.log(js_user.is_down)
// // Object.freeze(js_user)
// // js_user.email = "newtechsupport@dota.com"
// // console.log(js_user.email)
// // console.log(js_user)

// js_user.greeting = function(){
//     console.log("hello world of dawn.")
// }

// js_user.greeting_2 = function(){
//     console.log(`welcome to ${this.name}.`)
// }
// console.log(js_user.greeting);
// console.log(js_user.greeting_2());

// singleton and contructor

// const user = new Object();  // singleton object
const user = {} // non singleton obeject

user.id = "234ds"
user.name = "Luffy"
user.is_logged_in = true

// console.log(user);

const another_user = {
    email: "sdj@sf.com",
    full_name: {
        user_full_name: {
            first_name: "Monkey",
            last_name: "Garp",
            middle_name: "D"
        }
    }
}

// console.log(another_user.full_name)
/*
{
    user_full_name: { first_name: 'Monkey', last_name: 'Garp', middle_name: 'D' }
}
*/

// console.log(another_user.full_name.user_full_name)
/*
{ first_name: 'Monkey', last_name: 'Garp', middle_name: 'D' }
*/


// console.log(`${another_user.full_name.user_full_name.first_name} ${another_user.full_name.user_full_name.middle_name} ${another_user.full_name.user_full_name.last_name}`)
/*
Monkey D Garp
*/

const obj1 = { 1: "a", 2: "b", 3:"c"}
const obj2 = { 4: "d", 5: "e", 6:"f"}

// const obj3 = {obj1, obj2}
// console.log(obj3)
/*
{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'd', '5': 'e', '6': 'f' }
}
*/

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj3 = {...obj1, ...obj2}
// console.log(obj3)   //same result as above

console.log(js_user);
console.log();
console.log(Object.keys(js_user));
console.log();
console.log(Object.values(js_user));
console.log();
console.log(Object.entries(js_user));
console.log();
console.log(js_user.hasOwnProperty("is_down"));
console.log();
console.log(js_user.hasOwnProperty("is_up"));
