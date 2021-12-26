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
  getWords(words = [], currentWord = '') {
    if (this.isWord) words.push(currentWord);

    for (const char in this.characters) {
      const nextWord = currentWord + char;
      this.characters[char].getWords(words, nextWord);
    }

    return words;
  }
}

const trie = new Trie();

trie.addWord('fun');
trie.addWord('fast');
trie.addWord('fat');
trie.addWord('fate');
trie.addWord('father');

console.log(trie.getWords());
