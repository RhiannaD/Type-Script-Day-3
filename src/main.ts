// 1. Given the data below, define a type alias for representing users.
type User={
    name: string,
    age: number,
    company: string
}
let users: User = 
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    }; 
let users1: User =   {
        name:'Dylan Katina',
        age:99,
        company: 'Coding Temple'
    };


// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type Weekday={
    day:string
}

let day1: Weekday={
    day: "Monday"
}
let day2: Weekday={
    day: "Tuesday"
}
// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}
    printName = (): string => {
        return `${this.firstName} ${this.lastName}`
    }
}
let fullname= new Person('Rhianna','Dicent')
console.log(fullname.printName())
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 


// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee: Employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:  {
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Employee {
    name : string,
    salary: number,
    address:{
        street: string,
        city: string,
        zipCode: number
    }
}

