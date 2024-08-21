// App.js
import React, { useState } from 'react';

const Palindrome = () => {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(false);

    const containerStyle = {
        width: '90%',
        maxWidth: '31.25em',
        backgroundColor: '#ffffff',
        padding: '2em 3em',
        borderRadius: '0.75em',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        left: '50%',
        top: '50%',
    };

    const appTitleStyle = {
        color: '#333',
        fontSize: '1.8em',
        marginBottom: '1em',
        fontFamily: "'Roboto', sans-serif",
        textAlign: 'center',
    };

    const inputWrapperStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '1em',
        margin: '2em 0 1em',
    };

    const inputStyle = {
        border: '2px solid #ddd',
        borderRadius: '0.5em',
        padding: '0.8em 1em',
        fontSize: '1em',
        color: '#333',
        fontFamily: "'Roboto', sans-serif",
        transition: 'border-color 0.3s',
    };

    const inputFocusStyle = {
        borderColor: '#4571f5',
    };

    const buttonStyle = {
        fontSize: '1em',
        padding: '0.8em 1.2em',
        backgroundColor: '#4571f5',
        border: 'none',
        color: '#ffffff',
        borderRadius: '0.5em',
        cursor: 'pointer',
        fontFamily: "'Roboto', sans-serif",
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#365ab5',
    };

    const resultStyle = {
        textAlign: 'center',
        fontSize: '1.2em',
        fontFamily: "'Roboto', sans-serif",
        padding: '1em',
        borderRadius: '0.5em',
        color: '#ffffff',
        transition: 'background-color 0.5s, transform 0.4s',
        transform: 'scale(1.05)',
    };

    const successStyle = {
        backgroundColor: '#01bd5f',
    };

    const errorStyle = {
        backgroundColor: '#f52a3b',
    };

    const handleButtonClick = () => {
        const text = inputText
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, '');

        if (text.length === 0) {
            alert('Input cannot be empty');
            return;
        }

        const cleanedText = text.split('').reverse().join('');
        const palindrome = text === cleanedText;

        setResult(
            palindrome ? "Yes. It's a palindrome!" : "Nope. That's not a palindrome!"
        );
        setIsPalindrome(palindrome);
    };

    return (
        <div className="container" style={containerStyle}>
            <p style={appTitleStyle}>Requires a UI FIX</p>
            <h2 className="app-title" style={appTitleStyle}>
                Is It A Palindrome?
            </h2>
            <div className="input-wrapper" style={inputWrapperStyle}>
                <input
                    type="text"
                    placeholder="Enter a word"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    style={isPalindrome ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
                />
                <button
                    id="btn"
                    onClick={handleButtonClick}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Check
                </button>
            </div>
            <p
                className={isPalindrome ? 'success' : 'error'}
                style={{
                    ...resultStyle,
                    ...(isPalindrome ? successStyle : errorStyle),
                }}
            >
                {result}
            </p>
        </div>
    );
}

export default Palindrome;
