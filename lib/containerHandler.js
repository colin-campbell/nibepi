
const fs = require('fs');

let container;

const isContainer = () => {
    if (container === undefined) {
        container = isDocker() || isLXC() || isKubernetes();
    }
    return container;
}

/**
 * Simple check for Docker environment.
 * @returns boolean
 */
const isDocker = () => {
    return fs.existsSync('/.dockerenv') || fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
}

/**
 * @todo check for LCX
 *  Will probably need to do some /proc/1/* voodoo
 * @returns boolean
 */
const isLXC = () => {
    return false;
}

/**
 * @todo check for K8s
 * @returns boolean
 */
const isKubernetes = () => {
    return false;
}

module.exports = isContainer