const BadRequestError = require('../error-middleware/badRequest')

const sixChars = new RegExp('(?=.{6,})')
const oneLowercase = new RegExp('(?=.*[a-z])')
const oneDigit = new RegExp('(?=.*[a-z])')

async function weakPassword(password) {
    if (!sixChars.test(password) & returnError===true) {
        throw new BadRequestError("Password must be at least 6 chars long");
    } else if (!oneLowercase.test(password) & returnError===true) {
        throw new BadRequestError("Password must have at least one Lowercase letter");
    } else if (!oneDigit.test(password) & returnError===true) {
        throw new BadRequestError("Password must have at least one Digit");
    } 
}

module.exports = weakPassword;