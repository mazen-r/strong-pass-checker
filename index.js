const strongPassword = require('./lib/checkers/strongPassword');
const mediumPassword = require('./lib/checkers/mediumPassword');
const weakPassword = require('./lib/checkers/weakPassword');

module.exports = {
    strongPassword: strongPassword,
    mediumPassword: mediumPassword,
    weakPassowrd: weakPassword
};