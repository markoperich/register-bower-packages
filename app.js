"use strict";
var json = JSON.parse(require('fs').readFileSync('bowerRepository_NI_1.json', 'utf8'));
var exec = require('child_process').execSync, child;

function register (cmd){
  console.log("cmd : "+ cmd);
  try {
    child = exec(cmd, {stdio:[process.stdin, process.stdout, process.stderr] } );
  } catch (err) {
    // si se cae solo logueamos el erro y continuamos
    console.log('exec error: ' + err);
  }
}

for(var object in json){
  // console.log(object);
  var name = json[object].name;
  var repo = json[object].repo;

  var cmd = 'bower register -f ' +  name + " " + repo;
  register(cmd);
}
