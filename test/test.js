let spverUtilite = require('../src/spverUtilite.js');

let assert = require('chai').assert;

let date = new Date().toLocaleDateString();
let formatedDateArray = date.split('.').reverse();
let formatedDate = formatedDateArray.join('');

describe('spverUtilite', function() {
  let tests = [
    {currentVersion: '2.1.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--show'], expected: '2.1.4.20200312'},
    {currentVersion: '2.1.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-s'], expected: '2.1.4.20200312'},
    {currentVersion: '2.1.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--patch'], expected: `2.1.5.${formatedDate}`},
    {currentVersion: '2.1.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-p'], expected: `2.1.5.${formatedDate}`},
    {currentVersion: '2.1.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--feature'], expected: `2.2.5.${formatedDate}`},
    {currentVersion: '2.1.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-f'], expected: `2.2.5.${formatedDate}`}
  ];

  tests.forEach(function(test) {
    process.argv = test.parameters;
    let result = spverUtilite(process.argv)
    it(
     `current version: ${test.currentVersion}
      parameters: ${test.parameters.join(' ')}
      expected: ${test.expected}
      result: ${result}`, 
      function() {
        assert.equal(result, test.expected);
      }
    );
  });
});