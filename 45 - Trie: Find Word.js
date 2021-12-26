class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      var char = word[index];
      var subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }

  findWord(word, index = 0) {
    let subTrie = this.characters;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!subTrie[char]) return;
      if (i === word.length - 1) {
        return subTrie[char];
      }
      subTrie = subTrie[char].characters;
    }
  }
}

const trie = new Trie();

trie.addWord('fun');
trie.addWord('fast');
trie.addWord('fat');
trie.addWord('fate');
trie.addWord('father');

console.log(trie.findWord('taco'));
console.log(trie.findWord('fat').characters);
console.log(trie.findWord('father').characters);
console.log(trie.findWord('father').isWord);
