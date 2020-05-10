import { evaluate } from "mathjs";

const expression = process.argv[2];
if (expression) {
    console.log(`expression '${expression}'`)
    console.log(evaluate(expression));
}