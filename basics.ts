// Primitives: number, string, boolean
// More complex types: arrays, objects
//  Function types, parameters

// Primitives
//number should start with lower case as it will then point to primitive data type in JS else if 
// n is capital then NUmber will point to the Number object in JS.
let age: number;
age = 12;
let userName: string;
userName = 'Piyush';

let isDeveloper: boolean;

isDeveloper = true;


//More complex types

//Here we are defining the type of the object
let person: {
    name: string;
    age: number;
}

//Here we are storing in person object
person = {
    name: 'Piyush',
    age: 23
};

//Following will show error as person type is different
// person ={
//     isEmployee: true
// };
 
//Here we will be storing array of objects
let people: {
    name: string;
    age: number;
}[];

//Type inference

// Here below line is also valid but Typescript automatically infers its type based 
// on the input given. Therefore second statement is correct also.
//First statement
//  let course: string = 'React - The Complete Guide';
//Second statement
// let course = 'React - The Complete Guide';
// course = 12341; This statement will give error


//Below is a example of union type where same variable name can have multiple types
let course: string | number = 'React - The Complete Guide';

course = 12341; 


//Type alias
//Here we are creating type alias  with type keyword
//It was not added by standard JS but a TS feature where 
// same type definition can be added.
//Below is an example of Object type definition 
type Car = {
    name: string;
    price: number;
};

let car: Car;

let cars: Car[];

//Functions & types

function add(a: number ,b: number){

    return a+b;

}

function print(value: any)
{
    console.log(value);
}

//Generics

// function insertAtBeginning(array: any)

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}


const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split('');

//Generic Types ("Generics") can be tricky to wrap your head around.

// But indeed, we are working with them all the time - one of the most prominent examples is an array.

// Consider this example array:

// let numbers = [1, 2, 3];
// Here, the type is inferred, but if we would assign it explicitly, we could do it like this:

// let numbers: number[] = [1, 2, 3];
// number[] is the TypeScript notation for saying "this is an array of numbers".

// But actually, number[] is just syntactic sugar!

// The actual type is Array. ALL arrays are of the Array type.

// BUT: Since an array type really only makes sense if we also describe the type of items in the array, Array actually is a generic type.

// You could also write the above example liks this:

// let numbers: Array<number> = [1, 2, 3];
// Here we have the angle brackets (<>) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (T in the previous lecture).

// Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:

// let numbers = [1, 2, 3];
// But if we want to explicitly set a type, we could do it like this:

// let numbers: Array<number> = [1, 2, 3];
// Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:

// let numbers: number[] = [1, 2, 3];
// If we take the example from the previous lecture, we could've also set the concrete type for our placeholder T explicitly:

// const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
// So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section!
