/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const length = nums.length;
    let sum = length * (length + 1) / 2;
    for (const num of nums) { // Spread the Nums Array Value
        sum -= num;
        console.log(num);
        console.log(sum);
    }

    return sum;
};


console.log(missingNumber([3, 0, 1])); // 2