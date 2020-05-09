let currentVersion = "2.1.4.20200312";

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
      newVersionArray = currentVersionArray;
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

  function increasePatch(versionArray) {
    versionArray[2] = +versionArray[2] + 1;
    versionArray[3] = addCurrentDate();
    return versionArray;
  }

  function increaseFeature(versionArray) {
    versionArray[1] = +versionArray[1] + 1;
    versionArray[2] = +versionArray[2] + 1;
    versionArray[3] = addCurrentDate();
    return versionArray;
  }

  function increaseMajor(versionArray) {
    versionArray[0] = +versionArray[0] + 1;
    versionArray[2] = +versionArray[2] + 1;
    versionArray[3] = addCurrentDate();
    return versionArray;
  }

  function setCustomVersion(versionArray, customVersion) {
    customVersionArray = customVersion.split('.');
    versionArray[0] = customVersionArray[0];
    versionArray[1] = customVersionArray[1];
    versionArray[2] = +versionArray[2] + 1;
    versionArray[3] = addCurrentDate();
    return versionArray;
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