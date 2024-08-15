import React, { useState } from 'react';

import Container from "../../components/Container"


const RomanNumeralConverter = () => {
    const [inputVal, setInputVal] = useState('0');
    const [output, setOutput] = useState('');

    const btnClicked = () => {
        let num = parseInt(inputVal, 10);

        if (isNaN(num)) {
            setOutput('Please enter a valid number');
        } else if (num < 1) {
            setOutput('Please enter a number greater than or equal to 1');
        } else if (num >= 4000) {
            setOutput('Please enter a number less than or equal to 3999');
        } else {
            const romanValues = [
                { value: 1000, numeral: 'M' },
                { value: 900, numeral: 'CM' },
                { value: 500, numeral: 'D' },
                { value: 400, numeral: 'CD' },
                { value: 100, numeral: 'C' },
                { value: 90, numeral: 'XC' },
                { value: 50, numeral: 'L' },
                { value: 40, numeral: 'XL' },
                { value: 10, numeral: 'X' },
                { value: 9, numeral: 'IX' },
                { value: 5, numeral: 'V' },
                { value: 4, numeral: 'IV' },
                { value: 1, numeral: 'I' }
            ];

            let str = '';

            for (const { value, numeral } of romanValues) {
                while (num >= value) {
                    console.log("in the looppppppp")
                    str += numeral;
                    num -= value;
                }
            }
            setOutput(str);
        }
    };
    
    return (
        
        <Container title="Number To Roman" subtitle="convertor">
            <input
                id="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                type="number"
            />
            <button id="convert-btn" onClick={btnClicked}>
                Convert Button
            </button>
            <div>
                <p id="output">{output}</p>
            </div>
        </Container>
    )
}

export default RomanNumeralConverter