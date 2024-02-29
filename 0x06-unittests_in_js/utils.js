const Utils = {
  /**
   * @param {String} type [String: (SUM/DIVIDE/SUBTRACT)]
   * @param {Number} a [Number]
   * @param {Number} b [Number]
   */
  calculateNumber(type, a, b) {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        if (Math.round(b) === 0) {
          return 'Error';
        } else {
          return Math.round(a) / Math.round(b);
        }
      default:
        throw TypeError;
    }
  },
};

module.exports = Utils;
