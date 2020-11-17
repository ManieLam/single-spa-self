var fs = require('fs')
var path = require("path")
var watch = require('node-watch');
var configs = require('./apps.config.json')
var apps = configs.apps;
var root = path.join(__dirname, '../public');

function getResource (config, setwatch) {
  config = JSON.parse(config);
  var name = config.name;
  var projectDir = root + "/" + name;

  if (setwatch) {
    watch(projectDir + '/index.html', {
      recursive: true,
      delay: 5000
    }, function (evt, name) {
      if (evt == 'update') {
        updateResource(config.name)
      }
    });
  }
  var info = fs.statSync(projectDir)
  if (info.isDirectory()) {
    var childAppResource = fs.readdirSync(projectDir + '/static/js');
    var patters = config.resource.map(function (item) {
      return new RegExp("^" + item + ".[\\d|\\w]{20}.js$");
    });
    config.resource = [];

    for (let i = 0; i < childAppResource.length; i++) {
      var p1 = new RegExp("^" + config.resourceEntryUrl + ".[\\d|\\w]{20}.js$");
      if (p1.test(childAppResource[i])) {
        config.resourceEntryUrl = childAppResource[i]
      }

      for (let n = 0; n < patters.length; n++) {
        if (patters[n].test(childAppResource[i])) {
          config.resource.push(childAppResource[i]);
          break;
        }
      }
    }
  }
  return config
}

function updateResource (name) {
  let prodConfigs = require('../public/apps.config.json');
  let config;
  for (let i = 0; i < apps.length; i++) {
    if (apps[i].name == name) {
      config = getResource(JSON.stringify(apps[i]), false);
      break;
    }
  }

  for (let i = 0; i < prodConfigs.apps.length; i++) {
    if (prodConfigs.apps[i].name == name) {
      for (let t in config) {
        prodConfigs.apps[i][t] = config[t];
      }
    }
  }

  try {
    fs.writeFileSync(path.join(__dirname, '../public/apps.config.json'), JSON.stringify(prodConfigs));
  } catch (err) {
    console.log('配置文件写入失败')
  }
}


module.exports = function setConfigApp () {
  try {
    fs.writeFileSync(path.join(__dirname, '../public/apps.config.json'), JSON.stringify(
      {
        apps: apps.map((m) => getResource(JSON.stringify(m), true))
      }
    ), () => {
      console.log('配置文件写入成功')
    });
  } catch (err) {
    console.log('配置文件写入失败')
  }
}