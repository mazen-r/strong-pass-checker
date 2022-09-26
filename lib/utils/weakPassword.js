const BadRequestError = require('../errors/badRequest');

const sixChars = new RegExp('(?=.{6,})')
const oneLowercase = new RegExp('(?=.*[a-z])')
const oneDigit = new RegExp('(?=.*[a-z])')

async function weakPassword(password, returnError=true) {
    if (!sixChars.test(password)) {
        weakPassword.message = "Password must be at least 6 chars long";
        if (returnError === true){
            throw new BadRequestError("Password must be at least 6 chars long");
        };
    } else if (!oneLowercase.test(password)) {
        weakPassword.message = "Password must have at least one Lowercase letter";
        if (returnError === true){
            throw new BadRequestError("Password must have at least one Lowercase letter");
        };
    } else if (!oneDigit.test(password)) {
        weakPassword.message = "Password must have at least one Digit";
        if (returnError === true){
            throw new BadRequestError("Password must have at least one Digit");
        };
    }; 
;}

module.exports = weakPassword;