//Primitives: number,string,booleans
//arrays, objects
//function typers, parameter


//Primitives
// let age: number = 24;

// age = 12;


// let userName: string | string[]= 'Mike24';

// let isInstructor:boolean;

// let hobbies:string[];

// hobbies = ['bball', 'dancing'];

// let person: Person | Person[];

// person = {
//     name: 'Max',
//     age: 54
// }

//Tyoe inference
//Typescript trys to infer as many types of possible
// let course = 'react - The Complete Guide';
// course = 12341;

//Union types allows you to allow mutiple types

// let course: string | number = 'react - The Complete Guide';
// course = 12341;

//Assigning Type ALiais

// type Person = {
//     name: 'Max',
//     age: 54
// }

// Functions & types

// let add = (a: number,b: number) => {
//     return a + b;
// };

// let printOutput = (value: any) => {
//     console.log(value);
// }

//Generics
//The tpe of the array and values should be the same
// let insertAtBeginninng = <T>(array: T[], value: T) => {
//     const newArray = [value, ...array];
//     return newArray;
// };

// const demoArray = [1,2,3];

// const updatedArray = insertAtBeginninng(demoArray, -1);
// console.log(updatedArray);

// class Student {
//     constructor(public firtName: string, public lastName: string, public age: number, private courses: string[]) { }

//     enroll(courseName: string) {
//         this.courses.push(courseName);
//     }

// }

// const student = new Student('Max', 'Bay', 54, ['Angular']);

interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet() {
      console.log('Hello');
  },  
};

class Instrctor implements Human{
    firstName: string;
    age:number;
    greet() {
        console.log('Hello!!!!');
    }
}