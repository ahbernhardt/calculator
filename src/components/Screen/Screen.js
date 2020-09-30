import React from 'react';

import ResultScreen from './ResultScreen';
import ComputationScreen from './ComputationScreen';
import './Screen.css'
const screen = (props) => (
    <section className="screen" id="display">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
);

export default screen;
