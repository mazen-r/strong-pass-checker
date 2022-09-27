const BadRequestError = require('../errors/badRequest');
const messages = require('../utils/messages')

const eightChars = new RegExp('(?=.{8,})');
const oneUppercase = new RegExp('(?=.*[A-Z])');
const oneLowercase = new RegExp('(?=.*[a-z])');
const oneDigit = new RegExp('(?=.*[0-9])');
const oneSpecial = new RegExp('([^A-Za-z0-9])');

async function strongPassword(password, returnError=true) {
    if (!eightChars.test(password)) {
        strongPassword.message = messages.eightChars;
        if (returnError === true) {
            throw new BadRequestError(messages.eightChars);
        };
    } else if (!oneUppercase.test(password)) {
        strongPassword.message = messages.oneUppercase;
        if (returnError === true) {
            throw new BadRequestError(messages.oneUppercase);
        };
    } else if (!oneLowercase.test(password)) {
        strongPassword.message = messages.oneLowercase;
        if (returnError === true) {
            throw new BadRequestError(messages.oneLowercase);
        };
    } else if (!oneDigit.test(password)) {
        strongPassword.message = messages.oneDigit;
        if (returnError === true) {
            throw new BadRequestError(messages.oneDigit);
        };
    } else if (!oneSpecial.test(password)) {
        strongPassword.message = messages.oneSpecial;
        if (returnError === true) {
            throw new BadRequestError(messages.oneSpecial);
        };
    };
};

module.exports = strongPassword;