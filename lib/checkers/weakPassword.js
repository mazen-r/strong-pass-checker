const BadRequestError = require('../errors/badRequest');

const sixChars = new RegExp('(?=.{6,})')
const oneLowercase = new RegExp('(?=.*[a-z])')
const oneDigit = new RegExp('(?=.*[0-9])')

async function weakPassword(password, returnError=true) {
    if (!sixChars.test(password)) {
        weakPassword.message = messages.sixChars;
        if (returnError === true){
            throw new BadRequestError(messages.sixChars);
        };
    } else if (!oneLowercase.test(password)) {
        weakPassword.message = messages.oneLowercase;
        if (returnError === true){
            throw new BadRequestError(messages.oneLowercase);
        };
    } else if (!oneDigit.test(password)) {
        weakPassword.message = messages.oneDigit;
        if (returnError === true){
            throw new BadRequestError(messages.oneDigit);
        };
    }; 
;}

module.exports = weakPassword;