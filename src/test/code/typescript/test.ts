// function greeter(person) {
//     return "Hello, " + person;
// }

// var user = "Jane User";

// document.body.innerHTML = greeter(user);

// function greeter(person: string) {
//     return "Hello, " + person;
// }

// var user = "Jane User";
// // var user = [0, 1, 2];

// document.body.innerHTML = greeter(user);

class Student {
    fullName: string;
    constructor(public firstName, middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

console.log(greeter(user))