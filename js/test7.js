const name = "Arghyadeep"
const repocount = 0

// console.log(name + repocount + " vlaue")

console.log(`Hello, my name is ${name} and my repo count is ${repocount}}`)
console.log();
const game_name = new String("Dota-2");
console.log(game_name);
console.log(game_name[0]);
// console.log(game_name.__proto__); to check the prototypes a.k.a. string functions
console.log(game_name.length);
console.log(game_name.toUpperCase())
console.log(game_name.charAt(2))
console.log(game_name.indexOf("t"))
console.log()

const new_game = game_name.substring(0,4);
console.log(new_game);
console.log();

const another_game = game_name.slice(0,-2);
console.log(another_game);
console.log();

const new_game1 = "     dota     ";
console.log(new_game1.length);
console.log((new_game1.trim()).length);
console.log()

const url = "https://google.com/search?=corndog"

console.log(url.replace("corn", "hot"))
console.log(url.includes("dog"))
console.log(url.split("/"))