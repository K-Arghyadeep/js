//()()
//1st () -> function defintion
//2nd () -> execution call

(function chai(){
    console.log(`DB Connected.`);
})(); // without ';' the function will not end

((name) => {
    console.log(`DB Connected Two by ${name}.`)
})("dota");