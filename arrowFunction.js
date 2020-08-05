const add = (num1, num2) =>  num1 + num2;
const result = add(20, 40);
console.log(result);

const num = () => console.log(5);
num();

const math = (num1, num2) =>{
    const sum = num1 + num2;
    const sub = num1 - num2;
    const result = sum * sub;

    return result;
}

const total = math(20, 50);
console.log(total);
