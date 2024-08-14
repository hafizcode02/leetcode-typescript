const calPoints = (ops) => {
    let stack = [];
    let sum = 0;
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === 'C') {
            sum -= stack.pop();
        } else if (ops[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2);
            sum += stack[stack.length - 1];
        } else if (ops[i] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            sum += stack[stack.length - 1];
        } else {
            stack.push(parseInt(ops[i]));
            sum += stack[stack.length - 1];
        }
    }
    return sum;
}

let ops = ["5","2","C","D","+"];
console.log(calPoints(ops)); // 30