const BadRequestError = require('../errors/badRequest');
const messages = require('../utils/messages')

const sixChars = new RegExp('(?=.{6,})')
const oneUppercase = new RegExp('(?=.*[A-Z])')
const oneLowercase = new RegExp('(?=.*[a-z])')
const oneDigit = new RegExp('(?=.*[0-9])')

async function mediumPassword(password, returnError=true) {
    if (!sixChars.test(password)) {
        mediumPassword.message = messages.sixChars;
        if (returnError === true) {
            throw new BadRequestError(messages.sixChars);
        };
    } else if (!oneUppercase.test(password)) {
        mediumPassword.message = messages.oneUppercase;
        if (returnError === true) {
            throw new BadRequestError(messages.oneUppercase);
        };
    } else if (!oneLowercase.test(password)) {
        mediumPassword.message = messages.oneLowercase;
        if (returnError === true) {
            throw new BadRequestError(messages.oneLowercase);
        };
    } else if (!oneDigit.test(password)) {
        mediumPassword.message = messages.oneDigit;
        if (returnError === true) {
            throw new BadRequestError(messages.oneDigit);
        };
    };
};

module.exports = mediumPassword;