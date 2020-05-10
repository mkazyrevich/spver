let currentVersion = "2.2.4.20200312";

function spverUtilite(param) {

  function spver() {
    const commander = require('commander');
    commander
      .option('-s, --show', 'show current version')
      .option('-p, --patch', 'increase patch number')
      .option('-f, --feature', 'increase feature number')
      .option('-m, --major', 'increase major number')
      .option('-c, --custom', 'set custom version')
      .parse();
    
    let currentVersionArray = splitCurrentVersionString(eval(param[2]));
    let newVersionArray = applyCommandLineOption(commander, currentVersionArray, param[4]);
    let newVersion = joinNewVersionArray(newVersionArray);
    return newVersion;
  }

  return spver()

  function splitCurrentVersionString(currentVersion) {
    let currentVersionArray = currentVersion.split('.');
    return currentVersionArray
  }

  function applyCommandLineOption(commander, currentVersionArray, customVersion) {
    let newVersionArray = [];

    if(commander.show) {
      newVersionArray = currentVersionArray.slice();
    }
    if(commander.patch) {
      newVersionArray = increasePatch(currentVersionArray);
    }
    if(commander.feature) {
      newVersionArray = increaseFeature(currentVersionArray);
    }
    if(commander.major) {
      newVersionArray = increaseMajor(currentVersionArray);
    }
    if(commander.custom) {
      newVersionArray = setCustomVersion(currentVersionArray, customVersion);
    }

    return newVersionArray
  }

  function increasePatch(currentVersionArray) {
    let newVersionArray = currentVersionArray.slice();
    newVersionArray[2] = +newVersionArray[2] + 1;
    newVersionArray[3] = addCurrentDate();
    return newVersionArray;
  }

  function increaseFeature(currentVersionArray) {
    let newVersionArray = currentVersionArray.slice();
    newVersionArray[1] = +newVersionArray[1] + 1;
    newVersionArray[2] = +newVersionArray[2] + 1;
    newVersionArray[3] = addCurrentDate();
    return newVersionArray;
  }

  function increaseMajor(currentVersionArray) {
    let newVersionArray = currentVersionArray.slice();
    newVersionArray[0] = +newVersionArray[0] + 1;
    newVersionArray[1] = 1;
    newVersionArray[2] = +newVersionArray[2] + 1;
    newVersionArray[3] = addCurrentDate();
    return newVersionArray;
  }

  function setCustomVersion(currentVersionArray, customVersion) {
    let newVersionArray = currentVersionArray.slice();
    customVersionArray = customVersion.split('.');
    newVersionArray[0] = customVersionArray[0];

    if(customVersionArray[1]) {
      newVersionArray[1] = customVersionArray[1];
    } else {
      newVersionArray[1] = 1;
    }

    if(customVersionArray[2]) {
      newVersionArray[2] = customVersionArray[2];
    } else {
      newVersionArray[2] = +newVersionArray[2] + 1;
    }

    newVersionArray[3] = addCurrentDate();
    return newVersionArray;
  }

  function addCurrentDate() {
    let date = new Date().toLocaleDateString();
    let formatedDateArray = date.split('.').reverse();
    let formatedDate = formatedDateArray.join('')
    return formatedDate
  }

  function joinNewVersionArray(newVersionArray) {
    let newVersion = newVersionArray.join('.');
    return newVersion
  }
}

module.exports = spverUtilite