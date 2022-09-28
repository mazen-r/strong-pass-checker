const mediumPassword = require('../lib/checkers/mediumPassword')

describe("Testing Strong Password checker", () => {

    test("It should return Password must be at least 6 chars long", () => {
        mediumPassword("mazen", returnError=false)
        expect(mediumPassword.message).toEqual("Password must be at least 6 chars long")
    })

    test("It should  return Password must have at least one Uppercase letter", () => {
        mediumPassword("mazenr", returnError=false)
        expect(mediumPassword.message).toEqual("Password must have at least one Uppercase letter")
    })

    test("Password must have at least one Lowercase letter", () => {
        mediumPassword("MAZENR", returnError=false)
        expect(mediumPassword.message).toEqual("Password must have at least one Lowercase letter")
    })

    test("It should return Password must have at least one Digit", () => {
        mediumPassword("Mazenr", returnError=false)
        expect(mediumPassword.message).toEqual("Password must have at least one Digit")
    })

    test("it should return undefined", () => {
        res = mediumPassword("Mazenr10", returnError=false).message
    })
})