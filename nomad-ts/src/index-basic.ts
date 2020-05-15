// // interface Human {
// //   name: string;
// //   age: number;
// //   gender: string;
// // }

// const person = {
//   name: "nicolas",
//   age: 22,
//   gender: "male",
// };

// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;

//   constructor(name: string, age: number, gender?: string){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const lynn = new Human("Lynn", 18, "female");

// // const sayHi = (name, age, gender) => {
// //   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// // }

// // 파라미터 뒤에 붙는 ?는 Optional을 의미
// // const sayHi = (name: string, age: number, gender?: string): void => {
// //   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// // };

// // const sayHi = (name: string, age: number, gender: string): void => {
// //   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// // };

// const sayHi = (person: Human): void => {
//   console.log(
//     `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
//   );
// };

// // sayHi("Nicolas", 24, "male");
// // sayHi(person);
// sayHi(lynn);

// export {};
