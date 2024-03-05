const obj = {
    name: "dota",
    age: 19,
    cost: "free"
}

console.log(obj.cost)
const {cost} = obj
console.log(cost)
// const {price} = obj
// console.log(price)// undefined
const {cost: price} = obj
console.log(price)


// json
/*
{
    key1: val1,
    key3: val2,
    key3: val3,
}
*/

