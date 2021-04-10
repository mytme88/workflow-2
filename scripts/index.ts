// Question 1
let myArray: (boolean | number)[] = []; 

// Question 2
let myTuple: [boolean, string, number];

// Question 3
(function(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
})("Hanne", "Petterteig");

// Question 4
let userTestStatus: { name: string, age: number, jobTitle?: string }[] = [
	{ name: "Burt", age: 77, jobTitle: "Magician" },
	{ name: "Walt", age: 11 },
	{ name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];

// Question 5
enum Status {
    Paid = 1,
    Unpaid,
    Unknown
  }

// Question 6
class Person {
    name: string;
  
    constructor(nameInput: string) {
      this.name = nameInput;
    }
  
    hello() {
      return `My name is ${this.name}`;
    }
  }
  
  let person = new Person("Hanne");

// Question 7
type StrOrBool = string | boolean;
type NumOrStr = number | string;
type DetailsObj = { id: NumOrStr, status: StrOrBool }

const user = (name: StrOrBool, details: DetailsObj) => {};