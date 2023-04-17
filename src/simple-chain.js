const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
  return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' && (position^0) === position) {
      if (position <1 || position >this.chain.length) {
        this.chain.length = 0;
        throw Error(`You can't remove incorrect link!`)
      }
      const index = position - 1;
      this.chain.splice (index,1);
      return this
    }
    this.chain.length = 0;
    throw Error(`You can't remove incorrect link!`)
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finish = this.chain.join('~~');
    this.chain.length = 0;
    return finish;
  }


};

module.exports = {
  chainMaker
};
