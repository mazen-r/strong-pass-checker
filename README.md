# <p align="center"> strong-pass-checker</p>  

![npm](https://img.shields.io/npm/v/strong-pass-checker?color=green&label=version) ![npm](https://img.shields.io/npm/dt/strong-pass-checker) ![GitHub top language](https://img.shields.io/github/languages/top/mazen-r/strong-pass-checker?color=green) ![GitHub](https://img.shields.io/github/license/mazen-r/strong-pass-checker)

strong-pass-checker is an NPM module for checking if password is strong enough. 
It throws custom API error message or just a plain text message for telling user why password isn't strong enough. 
It has 3 levels of secuirity based on diffrent schemas. 
You can use strong-pass-checker in both frontend & backend.
  
------------------------------
## Installation

```
$ npm install strong-pass-checker
```  
## Usage  
Strong-password has 3 levels of secuirity (Strong, Medium, Weak). 
You can return API error message for telling user why password isn't strong enough or get the text of the error and use it in frontend.  

Here is how can you use the Strong level.
```js
const strongpass = require("strong-pass-checker");

password = 'secret'
strongpass.strongPassword(password, returnError=false) // Here I don't want to throw Error to user if password isn't strong.
console.log(strongpass.strongPassowrd.message) // This will return "Password must be at least 8 chars long".
```

You can choose another security level by changing  
```strongpass.strongPassword()``` to ```strongpass.mediumPassword()``` or ```strongpass.weakPassword()```  

## Password Schemas:  

### Strong Password
  - 8 chars long.
  - At least one uppercase letter.
  - At least one lowercase letter.
  - At least one Digit.
  - At least one special char.


### Medium Password
  - 6 chars long.
  - At least one uppercase letter.
  - At least one lowercase letter.
  - At least one Digit.


### Weak Password
  - 6 chars long.
  - At least one lowercase letter.
  - At least one Digit.
-------------------------------
## Options

```returnError=true``` Parmater. This will will throw BadRequest Error with a status-code of 400 and message to user if the password didn't meet the schema.
```js
throw new BadRequestError(messages.oneLowercase)
```
The default value for this paramater is ```true```.  

<br>  

```js
(strongpass.strongPassword.message) //Password must have at least one Uppercase letter
```  
This will return the text of the message if you want to use the error message in frontend.  

you can create a custom workflow with it.

```js
const strongpass = require("strong-pass-checker");

password = 'secret'
strongpass.strongPassword(password, returnError=false)
passMessage = strongpass.strongPassowrd.message

if (passMessage === undefined) { // This means that the password meets the schema with no errors
  // Your custom workflow here
};
````  

# License  

[The MIT License](https://opensource.org/licenses/MIT)  
<br>
Copyright (c) 2022 [Mazen Ramadan](https://github.com/mazen-r)
