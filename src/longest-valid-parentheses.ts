// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses
// substring
// .

// Example 1:
//      Input: s = "(()"
//      Output: 2
//      Explanation: The longest valid parentheses substring is "()".

// Example 2:
//      Input: s = ")()())"
//      Output: 4
//      Explanation: The longest valid parentheses substring is "()()".

// Example 3:
//      Input: s = ""
//      Output: 0

// Constraints:
//      0 <= s.length <= 3 * 104
//      s[i] is '(', or ')'.

function longestValidParentheses(s: string): number {
  let maxLength = 0;
  const stack: number[] = [];

  // Push -1 to handle the case of valid substring starting from index 0
  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // Push the index of '(' onto the stack
      stack.push(i);
    } else {
      // Pop the top of the stack for ')'
      stack.pop();

      if (stack.length === 0) {
        // If stack is empty, push the current index onto the stack
        stack.push(i);
      } else {
        // Calculate the length of the current valid substring
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLength;
}

// Example usage:
console.log(longestValidParentheses("(()")); // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
console.log(longestValidParentheses("")); // Output: 0
