// functions

function add_two_number(number1, number2){
    console.log(number1 + number2)
}

// add_two_number(3,5)
// add_two_number(3,"5") // 35
// add_two_number(3,"a") // 3a
// add_two_number(3, null) // 3

function num_to_array(...num1){ // here ... means rest operator and not spread operator
    return num1
}

console.log(num_to_array(1,2,3,4,5))