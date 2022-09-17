
const isContainer = require('./isContainer');
const exec = require('child_process').exec;

const nibeExec = (command, callback )  => {

    return isContainer() ? exec('/bin/true', callback) : exec(command, callback);

}


module.exports = {
    nibeExec: nibeExec
}