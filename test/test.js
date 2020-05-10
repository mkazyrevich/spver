let spverUtilite = require('../src/spverUtilite.js');

let assert = require('chai').assert;

let date = new Date().toLocaleDateString();
let formatedDateArray = date.split('.').reverse();
let formatedDate = formatedDateArray.join('');

describe('spverUtilite', function() {
  let tests = [
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--show'], expected: '2.2.4.20200312'},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-s'], expected: '2.2.4.20200312'},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--patch'], expected: `2.2.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-p'], expected: `2.2.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--feature'], expected: `2.3.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-f'], expected: `2.3.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--major'], expected: `3.1.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-m'], expected: `3.1.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '--custom', '5.6'], expected: `5.6.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-c', '5.6'], expected: `5.6.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-c', '5'], expected: `5.1.5.${formatedDate}`},
    {currentVersion: '2.2.4.20200312', parameters: ['node', 'src/spver.js', 'currentVersion', '-c', '5.7.9'], expected: `5.7.9.${formatedDate}`},
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