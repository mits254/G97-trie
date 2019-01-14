class Node {
  constructor(key) {
    this.key = key;
    this.end = false;
    this.children = {}
  }
  
}

class Trie {
  constructor() {
   this.root = new Node(null);
  }

  insert(word, node = this.root) {
    if(word.length == 0){
      node.end = true;
      return;
    } else if(!node.children[word[0]]){
      node.children[word[0]] = new Node(word[0]);
      return this.insert(word.substr(1),node.children[word[0]]);
    } else {
      return this.insert(word.substr(1),node.children[word[0]]);
    }
   
  }

  contains(word) {
    // does trie contain word?
  }
  
  remove(word) {
    // remove word from trie
  }

  depthFirstSearch(prefix) {
    // return all words given a prefix
  }
  breadthFirstSearch(prefix) {
   // return all words given a prefix

  }
}

module.exports = { Node, Trie };
