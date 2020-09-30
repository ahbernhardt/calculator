import React from 'react';

import KeypadRow from './KeypadRow';
import Button from '../Button/Button';
import LargeButton from '../Button/LargeButton';
import './Keypad.css'

const keypad = props => (
    <section className="keypad">
        {/* row #1 */}
        <KeypadRow>
            <Button id="clear" type="primary" onButtonPress={props.onButtonPress}>C</Button>
            <Button type="primary" onButtonPress={props.onButtonPress}>&larr;</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>%</Button>
            <Button id="divide" type="operator" onButtonPress={props.onButtonPress}>/</Button>
        </KeypadRow>

        {/* row #2 */}
        <KeypadRow>
            <Button id="seven" onButtonPress={props.onButtonPress}>7</Button>
            <Button id="eight" onButtonPress={props.onButtonPress}>8</Button>
            <Button id="nine" onButtonPress={props.onButtonPress}>9</Button>
            <Button id="multiple" type="operator" onButtonPress={props.onButtonPress}>*</Button>
        </KeypadRow>

        {/* row #3 */}
        <KeypadRow>
            <Button id="four" onButtonPress={props.onButtonPress}>4</Button>
            <Button id="five" onButtonPress={props.onButtonPress}>5</Button>
            <Button id="six" onButtonPress={props.onButtonPress}>6</Button>
            <Button id="subtract" type="operator" onButtonPress={props.onButtonPress}>-</Button>
        </KeypadRow>

        {/* row #4 */}
        <KeypadRow>
            <Button id="one" onButtonPress={props.onButtonPress}>1</Button>
            <Button id="two" onButtonPress={props.onButtonPress}>2</Button>
            <Button id="three" onButtonPress={props.onButtonPress}>3</Button>
            <Button id="add" type="operator" onButtonPress={props.onButtonPress}>+</Button>
        </KeypadRow>

        {/* row #5 */}
        <KeypadRow>
            <LargeButton id="zero" onButtonPress={props.onButtonPress}>0</LargeButton>
            <Button id="decimal" onButtonPress={props.onButtonPress}>.</Button>
            <Button id="equals" type="operator" onButtonPress={props.onButtonPress}>=</Button>
        </KeypadRow>
    </section>
);

export default keypad;
