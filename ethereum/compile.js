const path = require('path');
const solc = require('solc');
// community led, upgraded file system module
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
//delete folder
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

//check if folder exists, if not create it
fs.ensureDirSync(buildPath);

console.log(output);
for(let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','')+'.json'),
    output[contract]
  );

}
