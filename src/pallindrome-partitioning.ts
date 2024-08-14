// Given a string s, partition s such that every
// substring
//  of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:
// Input: s = "a"
// Output: [["a"]]

// Constraints:
// 1 <= s.length <= 16
// s contains only lowercase English letters.

function partition(s: string): string[][] {
  const result: string[][] = [];

  function isPalindrome(sub: string): boolean {
    let left = 0;
    let right = sub.length - 1;
    while (left < right) {
      if (sub[left] !== sub[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  function backtrack(start: number, currentPartition: string[]): void {
    if (start >= s.length) {
      result.push([...currentPartition]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (isPalindrome(substring)) {
        currentPartition.push(substring);
        backtrack(end, currentPartition);
        currentPartition.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}

// Example usage:
console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]
console.log(partition("a")); // Output: [["a"]]
