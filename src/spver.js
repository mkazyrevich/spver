const currentVersion = "2.1.4.20200312";

function spver(currentVersion) {
  const commander = require('commander');
  commander
    .option('-s, --show', 'show current version')
    .option('-p, --patch', 'increase patch number')
    .option('-f, --feature', 'increase feature number')
    .option('-m, --major', 'increase major number')
    .option('-c, --custom', 'set custom version')
    .parse(process.argv);
  
  let currentVersionArray = splitCurrentVersionString(currentVersion);
  let newVersionArray = applyCommandLineOption(commander, currentVersionArray);
  let newVersion = joinNewVersionArray(newVersionArray);
  console.log(newVersion) 
}

function splitCurrentVersionString(currentVersion) {
  let currentVersionArray = currentVersion.split('.');
  return currentVersionArray
}

function applyCommandLineOption(commander, currentVersionArray) {
  let newVersionArray = [];

  if(commander.show) {
    return currentVersionArray;
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
    let customVersion = process.argv[4];
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
  cusronVersionArray = customVersion.split('.');
  versionArray[0] = cusronVersionArray[0];
  versionArray[1] = cusronVersionArray[1];
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

spver(eval(process.argv[2]));