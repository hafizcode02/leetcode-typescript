/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let results = [];
    candidates.sort((a, b) => a - b);

    const dfs = (start, target, path) => {
        if (target === 0) {
            results.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            console.log("i: ", i);
            if (i > start && candidates[i] === candidates[i - 1]) {
                console.log(i, " ");
                console.log(start, " ");
                console.log(candidates[i], " ");
                console.log(candidates[i - 1], " ");
                continue;
            }

            if (candidates[i] > target) {
                break;
            }

            path.push(candidates[i]);
            dfs(i + 1, target - candidates[i], path);
            path.pop();
        }
    };

    dfs(0, target, []);
    return results;
};

const candidates1 = [10, 1, 2, 7, 6, 1, 5];
const target1 = 8;
console.log(combinationSum2(candidates1, target1));