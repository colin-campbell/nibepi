
const fs = require('fs');
const nibeExec = require('./nibeExec');


const ensureConfig = (path)  =>  {
    if (!fs.existsSync(path)) {
        nibeExec(`sudo mount -o remount,rw / && sudo mkdir -p ${path} && sudo chown ${process.env.USER}:${process.env.USER} ${path}`, function(error, stdout, stderr) {
            console.log(`Configuration directory created ${path}`);
        });
    }

    try {
        return require(path + '/config.json');
       }
       catch (e) {
           console.log('Config file not found, loading default.');
           fs.copyFileSync(__dirname + '../default.json', path + '/config.json');
           return require(path + '/config.json');
       }
}


module.exports = {
    default: ensureConfig
}