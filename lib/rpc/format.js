(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'bignumber.js', '../convert'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('bignumber.js'), require('../convert'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bignumber, global.convert);
    global.format = mod.exports;
  }
})(this, function (exports, _bignumber, _convert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _bignumber2 = _interopRequireDefault(_bignumber);

  var _convert2 = _interopRequireDefault(_convert);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Encodes as hex, prefix with "0x", the most compact representation
   * (slight exception: zero should be represented as "0x0")
   */
  function toHex(val) {
    var hex = new _bignumber2.default(val).toString(16);
    return '0x' + hex;
  }

  function isPredefinedBlockNumber(blockNumber) {
    return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
  }

  function block(b) {
    return _extends({}, b, {
      difficulty: _convert2.default.toBigNumber(b.difficulty),
      totalDifficulty: _convert2.default.toBigNumber(b.totalDifficulty),
      gasLimit: _convert2.default.toNumber(b.gasLimit),
      gasUsed: _convert2.default.toNumber(b.gasUsed),
      size: _convert2.default.toNumber(b.size),
      timestamp: _convert2.default.toNumber(b.timestamp),
      number: _convert2.default.toNumber(b.number)
    });
  }

  exports.default = {
    toHex: toHex,
    block: block,
    isPredefinedBlockNumber: isPredefinedBlockNumber
  };
});