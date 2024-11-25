/**
 * 14. Longest Common Prefix (https://leetcode.com/problems/longest-common-prefix)
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Constraints:
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 *  */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 1) {
    return strs[0];
  }

  let minLength = 0;
  strs.forEach((val, index) => {
    if (index == 0) {
      minLength = val.length;
    } else {
      minLength = val.length < minLength ? val.length : minLength;
    }
  });

  let returnText: string = "";

  for (let i = 0; i < minLength; i++) {
    let tempVal: string = "";
    let isSame: Boolean = false;
    for (let j = 0; j < strs.length; j++) {
      isSame = tempVal === strs[j][i] ? true : false;
      tempVal = strs[j][i];

      if (j > 0 && isSame == false) {
        break;
      }
    }

    if (isSame) {
      returnText += strs[0][i];
    } else {
      break;
    }
  }

  return returnText;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["cir", "car"]));
