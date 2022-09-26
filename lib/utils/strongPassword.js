const BadRequestError = require('../errors/badRequest');

const eightChars = new RegExp('(?=.{8,})');
const oneUppercase = new RegExp('(?=.*[A-Z])');
const oneLowercase = new RegExp('(?=.*[a-z])');
const oneDigit = new RegExp('(?=.*[0-9])');
const oneSpecial = new RegExp('([^A-Za-z0-9])');

async function strongPassword(password) {
    if (!eightChars.test(password)) {
        throw new BadRequestError("Password must be at least 8 chars long");
    } else if (!oneUppercase.test(password)) {
        throw new BadRequestError("Password must have at least one Uppercase letter");
    } else if (!oneLowercase.test(password)) {
        throw new BadRequestError("Password must be at least 8 chars long");
    } else if (!oneDigit.test(password)) {
        throw new BadRequestError("Password must have at least one Digit");
    } else if (!oneSpecial.test(password)) {
        throw new BadRequestError("Password must have at least one Special character");
    };
};

module.exports = strongPassword;