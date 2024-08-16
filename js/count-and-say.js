// Fuck Recursive

let countAndSay = function(n) {
    if (n === 1) return '1';
    console.log('n ke-: ', n);
    let prev = countAndSay(n - 1);
    console.log('prev : ', prev);
    let result = '';
    let count = 1;
    for (let i = 0; i < prev.length; i++) {
        console.log('i ke-: ', i);
        console.log('prev[i]: ', prev[i]);
        console.log('prev[i + 1]: ', prev[i + 1]);
        if (prev[i] === prev[i + 1]) {
            count++;
            console.log('count: ', count);
        } else {
            result += count + prev[i];
            console.log('result: ', result);
            count = 1;
            console.log('count-else: ', count);
        }
    }
    return result;
}

console.log(countAndSay(4)); // 1211