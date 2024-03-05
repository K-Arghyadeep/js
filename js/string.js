const test_string = String("Hello-world!007");
console.log(test_string);
console.log();

console.log(test_string.anchor());
console.log();

console.log(`trying to use 'at' using a negative value: ${test_string.at(-1)}`);// can take negative values
console.log();

console.log(test_string.big());
console.log();


console.log(`trying to use 'charAt' using a negative value: ${test_string.charAt(-1)}`);// can't take negative values
console.log();

console.log(test_string.charCodeAt(2));//UTF-16 code
console.log();

console.log(test_string.codePointAt(2));//Unicode
console.log();

console.log(test_string.concat(", Ready for duty!"));
console.log();

const test_constructor = new String("Hello");
console.log(`test_constructor:${test_constructor}->${typeof(test_constructor)}`);
const test_prototype = String("Hello");
console.log(`test_prototype:${test_prototype}->${typeof(test_prototype)}`);
console.log();

console.log(test_string.endsWith("7"));
console.log(test_string.endsWith(7));
console.log(test_string.endsWith(Number(7)));
console.log();

console.log(test_string.fixed());
console.log();

console.log(test_string.fontcolor("red"));
console.log();

console.log(test_string.fontsize(10));
console.log();

console.log(test_string.includes("z"));
console.log();

console.log(test_string.indexOf("z"));
console.log(test_string.indexOf("H"));//Case sensitive
console.log();

console.log(" ".isWellFormed());
console.log("2:".isWellFormed());
console.log(test_string.isWellFormed());
console.log("ab\uD800".isWellFormed());
console.log("ab\uD800");
console.log();

console.log(test_string.italics());
console.log();

console.log(test_string.lastIndexOf("l"));
console.log();

console.log(test_string.length);
console.log();

console.log(test_string.link("www.google.com"));
console.log();

console.log(test_string.localeCompare(test_string.toLowerCase));
console.log();

console.log(test_string.match("Hello-world!007"));// match used for regex expressions.
console.log(test_string.match(test_string.toLowerCase));
console.log();

console.log(test_string.matchAll("Hello-world!007"));// matchAll used for regex expressions.
console.log(test_string.matchAll(test_string.toLowerCase));
console.log();

console.log(test_string.normalize());//The normalize() method of String values returns the Unicode Normalization Form of this string.
console.log();

console.log("hello".padEnd(7, "-"));
console.log(("hello".padEnd(6, "-")).padStart(7, "-"));
console.log("hello".padStart(7, "-"));
console.log();

console.log(test_string.repeat(4));
console.log();

console.log(test_string.replace("l", "_"));
console.log(test_string.replaceAll("l", "_"));
console.log();

console.log(test_string.search("l"));
console.log();

console.log(test_string.slice("4"));
console.log(test_string.slice(0, 4));
console.log();

console.log(test_string.small());
console.log();

console.log(test_string.split("!"));
console.log();

console.log(test_string.startsWith("h"));
console.log(test_string.startsWith("H"));
console.log();

console.log(test_string.strike());
console.log();

console.log(test_string.sub());
console.log();

console.log(test_string.substr(0, -1));//cannot take a neg val
console.log();

console.log(test_string.substring(-1, 4));
console.log();

console.log(test_string.sup());
console.log();

console.log(test_string.toLocaleLowerCase("en"));//The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.
console.log(test_string.toLocaleUpperCase("en"));//The toLocalUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.
console.log();

console.log(test_string.toLowerCase());
console.log();

console.log("    Hello    ".trim());
console.log("    Hello    ".trimLeft());
console.log("    Hello    ".trimRight());
console.log("    Hello    ".trimStart());
console.log("    Hello    ".trimEnd());
console.log();