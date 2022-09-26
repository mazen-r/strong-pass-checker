const BadRequestError = require('../errors/badRequest');

const eightChars = new RegExp('(?=.{8,})');
const oneUppercase = new RegExp('(?=.*[A-Z])');
const oneLowercase = new RegExp('(?=.*[a-z])');
const oneDigit = new RegExp('(?=.*[0-9])');
const oneSpecial = new RegExp('([^A-Za-z0-9])');

async function strongPassword(password) {
    if (!eightChars.test(password)) {
        strongPassword.message = "Password must be at least 8 chars long";
        throw new BadRequestError("Password must be at least 8 chars long");
    } else if (!oneUppercase.test(password)) {
        strongPassword.message = "Password must have at least one Uppercase letter";
        throw new BadRequestError("Password must have at least one Uppercase letter");
    } else if (!oneLowercase.test(password)) {
        strongPassword.message = "Password must have at least one Lowercase letter";
        throw new BadRequestError("Password must have at least one Lowercase letter");
    } else if (!oneDigit.test(password)) {
        strongPassword.message = "Password must have at least one Digit";
        throw new BadRequestError("Password must have at least one Digit");
    } else if (!oneSpecial.test(password)) {
        strongPassword.message = "Password must have at least one Special character";
        throw new BadRequestError("Password must have at least one Special character");
    };
};

module.exports = strongPassword;