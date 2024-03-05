//Scope 
const a = 1;
var b = 1;
let c = 1;

if (true){
    // const a1 = 1;
    // var b1 = 1;
    // let c1 = 1;
    // console.log(c); // cannot access c before initialization
    let c = 0
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a1); // a1 is not defined
// console.log(b1); // b1 no error
// console.log(c1); // c1 is not defined

function one(){
    const username = "dota"
    function two(){
        const platform = "PC"
        console.log(username)
    }
    // console.log(platform) // ReferenceError: platform is not defined
    two()
}
one()
