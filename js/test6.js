// js is dynamically typed language


// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// Non primitive || Reference type

// Array, Objects, Functio ns
/*
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/

let big_num = BigInt(1245434)
console.log(typeof big_num)
console.log(typeof BigInt)

// Stack (Primitive), Heap (Non-primitive)
 
console.log()
let my_name = "name1"
let ur_name = my_name
console.table([my_name, ur_name])
ur_name = "name2"
console.table([my_name, ur_name])
console.log()


let obj1 = {
    age : 32
}
let obj2 = obj1
console.table([obj1, obj2])
obj2.age = 20
console.table([obj1, obj2])
