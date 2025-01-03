/**
 * 241. Different Ways to Add Parentheses (https://leetcode.com/problems/different-ways-to-add-parentheses)
 * 
 * Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

 * The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

 * Example 1:

 * Input: expression = "2-1-1"
 * Output: [0,2]
 * Explanation:
 * ((2-1)-1) = 0
 * (2-(1-1)) = 2
 * Example 2:

 * Input: expression = "2*3-4*5"
 * Output: [-34,-14,-10,-10,10]
 * Explanation:
 * (2*(3-(4*5))) = -34
 * ((2*3)-(4*5)) = -14
 * ((2*(3-4))*5) = -10
 * (2*((3-4)*5)) = -10
 * (((2*3)-4)*5) = 10

 * Constraints:

 * 1 <= expression.length <= 20
 * expression consists of digits and the operator '+', '-', and '*'.
 * All the integer values in the input expression are in the range [0, 99].
 */

function diffWaysToCompute(expression: string): number[] {
  const memo = new Map<string, number[]>();

  function compute(expression: string): number[] {
    if (memo.has(expression)) {
      return memo.get(expression)!;
    }

    const results: number[] = [];

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (char === "+" || char === "-" || char === "*") {
        // Divide the expression into left and right sub-expressions
        const left = compute(expression.substring(0, i));
        const right = compute(expression.substring(i + 1));

        // Combine the results from left and right sub-expressions
        for (const l of left) {
          for (const r of right) {
            if (char === "+") {
              results.push(l + r);
            } else if (char === "-") {
              results.push(l - r);
            } else if (char === "*") {
              results.push(l * r);
            }
          }
        }
      }
    }

    // If the expression is just a number, add it as the result
    if (results.length === 0) {
      results.push(parseInt(expression));
    }

    memo.set(expression, results);
    return results;
  }

  return compute(expression);
}

// Example usage:
console.log(diffWaysToCompute("2-1-1")); // Output: [0, 2]
console.log(diffWaysToCompute("2*3-4*5")); // Output: [-34, -14, -10, -10, 10]
