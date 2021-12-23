class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    let currentNode = this.characters;

    for (let i = index; i < word.length; i++) {
      const char = word[i];

      if (!currentNode[char]) {
        currentNode[char] = new Trie();
      }

      if (i === word.length - 1) {
        currentNode[char].isWord = true;
      }
      currentNode = currentNode[char].characters;
    }
  }
}

const trie = new Trie();

trie.addWord('ha');
trie.addWord('hat');
trie.addWord('has');
trie.addWord('have');
trie.addWord('hate');

// console.log(trie.characters);
// console.log('\n');
// console.log(!!trie.characters['f']);
// console.log('\n');
// console.log(trie.characters.f.characters.u);
// console.log('\n');
// console.log(!!trie.characters.f.characters.u);
// console.log('\n');

console.log(JSON.stringify(trie, null, 2));

// true.characters // { f: Trie }
// true.characters.f.characters.u // { u: Trie }
