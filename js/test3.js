let score = 30
console.log(score);
console.log(typeof score);
console.log(typeof(score));
console.log();

score = "30"
console.log(typeof(score));
console.log(score);
let value_in_number = Number(score); // numbers can be converted to string too with the function String().
console.log(typeof value_in_number);
console.log();

let test = "hello"
console.log(test);
let test_in_number = Number(test);
console.log(test_in_number);
console.log(typeof test_in_number);
console.log();

let check_null = null;
console.log(check_null);
let null_in_number = Number(check_null);
console.log(null_in_number);
console.log(typeof null_in_number);
console.log();

let check_undefined;
let undefined_in_number = Number(check_undefined);
console.log(undefined_in_number);
console.log(typeof undefined_in_number);
console.log();

let check_boolean = true;
console.log(check_boolean);
let boolean_in_number = Number(check_boolean);
console.log(boolean_in_number);
console.log(typeof boolean_in_number);
console.log();

let is_logged_in = 1;
console.log(is_logged_in);
let boolean_is_logged_in = Boolean(is_logged_in);
console.log(boolean_is_logged_in);
console.log();

let is_logged_out = 0;
console.log(is_logged_out);
let boolean_is_logged_out = Boolean(is_logged_out);
console.log(boolean_is_logged_out);
console.log();

let bool_text = "";
console.log(bool_text);
let in_bool_text = Boolean(bool_text);
console.log(in_bool_text);
console.log();

bool_text = "hello";
console.log(bool_text);
in_bool_text = Boolean(bool_text);
console.log(in_bool_text);
console.log();