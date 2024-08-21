import React, { useState } from 'react';
import Container from '../../components/Container.js'

import '../../components/css/css/util.css'

const PhoneValidator = () => {
    const [inputValue, setInputValue] = useState('');
    const [resultMessage, setResultMessage] = useState('');

    const checkClicked = () => {
        if (!inputValue) {
        alert('Please provide a phone number');
        return;
        }

        // Regular expressions
        const option1 = /^1?[\s\-]?\(\d{3}\)[\s\-]?\d{3}[\s\-]?\d{4}$/;
        const option2 = /^1?[\s\-]?\d{3}[\s\-]?\d{3}[\s\-]?\d{4}$/;
        const option3 = /^1?[\s-]?\d{3}\(\d{3}\)\d{4}$/;
        const option4 = /^1?\d{10}$/;

        if (
            option1.test(inputValue) ||
            option2.test(inputValue) ||
            option3.test(inputValue) ||
            option4.test(inputValue)
        ) {
            setResultMessage(`Valid US number: ${inputValue}`);
        } else {
            setResultMessage(`Invalid US number: ${inputValue}`);
        }
    };

    const clearClicked = () => {
        setInputValue('');
        setResultMessage('');
    };

    return (
        <Container title="U.S Phone Number Validor" subtitle="">
            <input
                id="user-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button id="add-btn" className="p-r-30" onClick={checkClicked}>
                Check
            </button>
            <button id="add-btn" onClick={clearClicked}>
                Clear
            </button>
            <div>
                <p id="results-div">{resultMessage}</p>
            </div>
        </Container>
    )
}

export default PhoneValidator