/**
 * Created by Gonzo on 4/21/14.
 */

var fs = require('fs');
var path = require('path');

console.log("dirname: '%s'\n", __dirname);

console.log("readFileSync:");

//this line errors, unless we remove the '.' from __dirname
console.log("  filesystem.txt: %s", fs.readFileSync(path.join(__dirname,'filesystem.txt')));
console.log("  asset.txt: %s", fs.readFileSync(path.join(__dirname,'asset.txt')));
console.log("  other.txt: %s", fs.readFileSync(path.join(__dirname,'subFolder','other.txt')));

console.log("\nreadDirSync:");
console.log("  subFolder: %j", fs.readdirSync(__dirname));

//below function's source won't be visible
exports.hiddenFunction = function(){
    /*_jx_protected_*/
    console.log("Hello!");
};

//a normal function hence it's source visible
exports.normalFunction = function(){
    console.log("Hello!");
};
