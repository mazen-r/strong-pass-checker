const strongPassword = require('./checers/strongPassword');
const mediumPassword = require('./checkers/mediumPassowrd');
const weakPassowrd = require('./checkers/weakPassword');

module.exports = {
    strongPassword: strongPassword,
    mediumPassword: mediumPassword,
    weakPassowrd: weakPassowrd
};