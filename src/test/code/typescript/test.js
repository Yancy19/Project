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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
