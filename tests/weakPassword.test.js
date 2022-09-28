const weakPassword = require('../lib/checkers/weakPassword')

describe("Testing Weak Password checker", () => {

    test("It should return Password must be at least 6 chars long", () => {
        weakPassword("mazen", returnError=false)
        expect(weakPassword.message).toEqual("Password must be at least 6 chars long")
    })

    test("Password must have at least one Lowercase letter", () => {
        weakPassword("MAZENR", returnError=false)
        expect(weakPassword.message).toEqual("Password must have at least one Lowercase letter")
    })

    test("It should return Password must have at least one Digit", () => {
        weakPassword("Mazenr", returnError=false)
        expect(weakPassword.message).toEqual("Password must have at least one Digit")
    })

    test("it should return undefined", () => {
        res = weakPassword("Mazenr11", returnError=false).message
        expect(res).toEqual(undefined)
    })
})