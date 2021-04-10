// Question 1
var myArray = [];
// Question 2
var myTuple;
// Question 3
(function (firstName, lastName) {
    return firstName + " " + lastName;
})("Hanne", "Petterteig");
// Question 4
var userTestStatus = [
    { name: "Burt", age: 77, jobTitle: "Magician" },
    { name: "Walt", age: 11 },
    { name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];
// Question 5
var Status;
(function (Status) {
    Status[Status["Paid"] = 1] = "Paid";
    Status[Status["Unpaid"] = 2] = "Unpaid";
    Status[Status["Unknown"] = 3] = "Unknown";
})(Status || (Status = {}));
// Question 6
var Person = /** @class */ (function () {
    function Person(nameInput) {
        this.name = nameInput;
    }
    Person.prototype.hello = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
var person = new Person("Hanne");
var user = function (name, details) { };
