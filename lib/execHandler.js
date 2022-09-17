
const ContainerHandler = require('./containerHandler');
const exec = require('child_process').exec;

const nibeExec = (command, callback )  => {

    return ContainerHandler.isContainer() ? exec('/bin/true', callback) : exec(command, callback);

}


module.exports = {
    nibeExec: nibeExec
}