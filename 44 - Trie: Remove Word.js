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
    var char = word[index];
    if (index < word.length - 1 && this.characters[char]) {
      index += 1;
      return this.characters[char].findWord(word, index);
    } else {
      return this.characters[char];
    }
  }
  getWords(words = [], currentWord = '') {
    if (this.isWord) {
      words.push(currentWord);
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char;
      this.characters[char].getWords(words, nextWord);
    }
    return words;
  }
  autoComplete(prefix) {
    var subTrie = this.find(prefix);
    if (subTrie) {
      return subTrie.getWords([], prefix);
    } else {
      return [];
    }
  }
  removeWord(word) {
    if (!word.length) {
      this.isWord = false;
      return;
    }

    let subTrie = this.characters[word[0]];
    subTrie.removeWord(word.slice(1));

    if (!Object.keys(subTrie.characters).length && !subTrie.isWord) {
      delete this.characters[word[0]];
    }
    return this;
  }
}

const trie = new Trie();

trie.addWord('fun');
trie.addWord('fast');
trie.addWord('fat');
trie.addWord('fate');
trie.addWord('father');
trie.addWord('forget');
trie.addWord('awesome');
trie.addWord('argue');

console.log(JSON.stringify(trie.removeWord('father')));
