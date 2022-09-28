const strongPassword = require('../lib/checkers/strongPassword')

describe("Testing Medium Password checker", () => {

    test("It should return Password must be at least 8 chars long", () => {
        strongPassword("mazen", returnError=false)
        expect(strongPassword.message).toEqual("Password must be at least 8 chars long")
    })

    test("It should  return Password must have at least one Uppercase letter", () => {
        strongPassword("mazenram", returnError=false)
        expect(strongPassword.message).toEqual("Password must have at least one Uppercase letter")
    })

    test("Password must have at least one Lowercase letter", () => {
        strongPassword("MAZENRAM", returnError=false)
        expect(strongPassword.message).toEqual("Password must have at least one Lowercase letter")
    })

    test("It should return Password must have at least one Digit", () => {
        strongPassword("Mazenram", returnError=false)
        expect(strongPassword.message).toEqual("Password must have at least one Digit")
    })

    test("It should return Password must have at least one Special character", () => {
        strongPassword("Mazenram10", returnError=false)
        expect(strongPassword.message).toEqual("Password must have at least one Special character")
    })

    test("it should return undefined", () => {
        res = strongPassword("Mazenra#m10", returnError=false).message // Saved the message to another variable as the condidtion isn't met in this case
        expect(res).toEqual(undefined)
    })
})