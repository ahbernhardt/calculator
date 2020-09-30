# JavaScript Calculator

>Build a JavaScript Calculator. This is the fourth project of [FreeCodeCamp Front End Libraries Certification](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator). 
>
>This project bootstrapped with [React App](https://github.com/facebook/create-react-app).

Check for [Live Demo](https://anguyen0208.github.io/calculator/)

## Screenshot

![calculator-screenshot](https://github.com/anguyen0208/Project-Screenshots/blob/master/FCC-Calculator.png)

## Objective

Build a [CodePen.io](https://codepen.io) app or other frontend framework that is functionally similar to this: <https://codepen.io/freeCodeCamp/full/wgGVVX>. 

### User Stories

- [x] My calculator should contain a clickable element containing an `=` (equal sign) with a corresponding `id="equals"`.

- [x] My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight`, and `id="nine"`.
- [x] My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.
- [x] My calculator should contain a clickable element containing a `.` (decimal point) symbol with a corresponding `id="decimal"`.
- [x] My calculator should contain a clickable element with an `id="clear"`.
- [x] My calculator should contain an element to display values with a corresponding `id="display"`.
- [x] At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of `display`.
- [x] As I input numbers, I should be able to see my input in the element with the id of `display`.
- [x] In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit `=`, the correct result should be shown in the element with the id of display.`display`.
- [x] When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
- [x] When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted.
- [x] I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
- [x] If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if `5 + * 7 =` is entered, the result should be `35` (i.e. 5 * 7); if `5 * - 5 =` is entered, the result should be `-25` (i.e. 5 x (-5)).
- [x] Pressing an operator immediately following `=` should start a new calculation that operates on the result of the previous evaluation.
- [x] My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like `2 / 7` with reasonable precision to at least 4 decimal places).
- **Note On Calculator Logic:** It should be noted that there are two main schools of thought on calculator input logic: *immediate execution logic and formula logic*. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.
  
  **EXAMPLE:** `3 + 5 x 6 - 2 / 4 =`
  
  - Immediate Execution Logic: `11.5`
  - Formula/Expression Logic: `32.5`


## Available Scripts for React app

In the project directory, you can run:

### `npm start`

Runs the app and view it on the browser in the development mode:
    [http://localhost:3000](http://localhost:3000)

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run predeploy` or `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run deploy`

Deploy `build` folder to `gh-pages` branch of the repository .<br>

---
### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
