const BadRequestError = require('../errors/badRequest');

const sixChars = new RegExp('(?=.{6,})')
const oneUppercase = new RegExp('(?=.*[A-Z])')
const oneLowercase = new RegExp('(?=.*[a-z])')
const oneDigit = new RegExp('(?=.*[0-9])')

async function mediumPassword(password, returnError=true) {
    if (!sixChars.test(password)) {
        mediumPassword.message = "Password must be at least 6 chars long";
        if (returnError === true) {
            throw new BadRequestError("Password must be at least 6 chars long");
        };
    } else if (!oneUppercase.test(password)) {
        mediumPassword.message = "Password must have at least one Uppercase letter";
        if (returnError === true) {
            throw new BadRequestError("Password must have at least one Uppercase letter");
        };
    } else if (!oneLowercase.test(password)) {
        mediumPassword.message = "Password must have at least one Lowercase letter";
        if (returnError === true) {
            throw new BadRequestError("Password must have at least one Lowercase letter");
        };
    } else if (!oneDigit.test(password)) {
        mediumPassword.message = "Password must have at least one Digit";
        if (returnError === true) {
            throw new BadRequestError("Password must have at least one Digit");
        };
    };
};

module.exports = mediumPassword;