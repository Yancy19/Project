var Person = {
	Name: "t1",
	Age: ""
};
exports.Person = Person;

var reg=/[^0-9,\.-]+/g,str="1.2aq1qq",str1="1";
str1=str.replace(reg,"");
console.log(str);
console.log(str1);
var name = '"a", "b"';

console.log(name);
console.log(name.replace(/"([^"]*)"/g, "'$1'"));
