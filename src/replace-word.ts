// In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

// Example 1:

// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
// Example 2:

// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"

// Constraints:

// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 100
// dictionary[i] consists of only lower-case letters.
// 1 <= sentence.length <= 106
// sentence consists of only lower-case letters and spaces.
// The number of words in sentence is in the range [1, 1000]
// The length of each word in sentence is in the range [1, 1000]
// Every two consecutive words in sentence will be separated by exactly one space.
// sentence does not have leading or trailing spaces.

class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  searchPrefix(word: string): string {
    let node = this.root;
    let prefix = "";
    for (const char of word) {
      if (!node.children[char]) {
        break;
      }
      node = node.children[char];
      prefix += char;
      if (node.isEndOfWord) {
        return prefix;
      }
    }
    return word; // Return the original word if no root is found
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie();

  // Insert all roots into the Trie
  for (const root of dictionary) {
    trie.insert(root);
  }

  // Split the sentence into words and replace them with the root
  const words = sentence.split(" ");
  const replacedWords = words.map((word) => trie.searchPrefix(word));

  // Join the words back into a sentence
  return replacedWords.join(" ");
}

// Example usage:
console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
);
// Output: "the cat was rat by the bat"

console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
// Output: "a a b c"
