// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

function combinationSum2(candidates: number[], target: number): number[][] {
  const results: number[][] = [];
  candidates.sort((a, b) => a - b); // Sort the candidates to handle duplicates easily (ascending)

  function backtrack(
    start: number,
    target: number,
    currentCombination: number[]
  ): void {
    if (target === 0) {
      results.push([...currentCombination]); // Found a valid combination
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue; // Skip duplicates
      }

      if (candidates[i] > target) {
        break; // No need to continue if the candidate is larger than the remaining target
      }

      currentCombination.push(candidates[i]); // Choose the candidate
      backtrack(i + 1, target - candidates[i], currentCombination); // Recur with reduced target
      currentCombination.pop(); // Backtrack to explore other possibilities
    }
  }

  backtrack(0, target, []); // Start the backtracking process
  return results;
}

const candidates1 = [10, 1, 2, 7, 6, 1, 5];
const target1 = 8;
console.log(combinationSum2(candidates1, target1));
// Output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]

const candidates2 = [2, 5, 2, 1, 2];
const target2 = 5;
console.log(combinationSum2(candidates2, target2));
// Output: [[1, 2, 2], [5]]
