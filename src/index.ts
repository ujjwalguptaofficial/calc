import { evaluate } from "./calculator";

const expression = process.argv[2];
console.log("argv", process.argv);

if (expression) {
    console.log(evaluate(expression));
}