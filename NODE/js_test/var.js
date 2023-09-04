var hello = "hello";

function sayHello() {
    var hello = "hello hello";
    console.log(hello);
}
sayHello();
console.log(hello);

const foo = () => {
    console.log("arrow function");
}

const object = {a:1, b:2};
// const a = object.a;
// const b = object.b;

const {a, b} = object;

const array = [1,2];
const [one, two] = array;

