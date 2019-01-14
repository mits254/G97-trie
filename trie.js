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
    let node = this.root;
    while(word.length > 1){
      if(!node.children[word[0]]){
        return false;
      } else {
        node = node.children[word[0]];
        word = word.substr(1)
      }
    }
    return (node.children[word[0]] && node.children[word[0]].end ? true : false)
  }
  
  remove(word) {
    // remove word from trie
    if(!this.root) {
      return;
    }
    if(this.contains(word)) {
      this.removeNode(this.root, word);
    }
  }

  removeNode(node, word){
    if(!node || !word){
      return;
    }
    let letter = word[0];
    let child = node.children[letter];
    if (child) {
      let remainder = word.substring(1);
      if (remainder) {
        this.removeNode(child, remainder);
      } else {
        if (Object.keys(child.children).length === 0) {
          delete node.children[letter];
        } else {
          child.end = false;
        }
      }
    }

  }

  depthFirstSearch(prefix) {
    // return all words given a prefix
  }
  breadthFirstSearch(prefix) {
   // return all words given a prefix

  }
}

module.exports = { Node, Trie };
