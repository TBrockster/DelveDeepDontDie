const {defaults} = require('jest-config');
module.exports = {
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
};
