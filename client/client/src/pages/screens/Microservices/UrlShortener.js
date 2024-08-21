import React, { useState } from 'react';
import Container from "../../components/Container"
import axios from 'axios'



const UrlShortener = () => {

    const [inputVal, setInputVal] = useState('');
    const [output, setOutput] = useState({
        original_url: '',
        short_url: ''
    });
    const [data, setData] = useState({
        original_url: "",
        short_url: ""
    });

    const btnClicked = async(e) => { 
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + "/shorturl", {
                url: inputVal
            })
            console.log("posted!")
            console.log(response.data)
            setOutput({
                original_url: response.data.original_url,
                short_url: response.data.short_url
            })
            setInputVal('')
        } catch (error) {
            setOutput({
                original_url: "",
                short_url: ""
            })
            console.log(error);
            alert("Error fetching data");
            return;
        }
        setInputVal('')
    }

    return (
        <Container title="URL Shortener" subtitle="Creates short urls for urls">

            <h3>POST - Short URL Creation:</h3>
            <p>https://portfolio-1-yf07.onrender.com/api/shorturl/<b>https://www.google.com</b></p><br />
            

            <h3>Try it yourself!</h3>
            <input
                id="input"
                value={inputVal}
                placeholder='https://www.freecodecamp.org'
                onChange={(e) => setInputVal(e.target.value)}
                type="text"
            />
            <button id="post-btn" onClick={btnClicked}>
                POST URL
            </button>
            <br/>
            <p>original: {output.original_url}</p>
            <p>short: {output.short_url}</p>
            
            <br/>
            <h3>Example Usage:</h3>
            <p>
                <a href="https://portfolio-1-yf07.onrender.com/api/shorturl/3">https://portfolio-1-yf07.onrender.com/api/shorturl/3</a>
            </p>

            <h4>Will Redirect you to:</h4>
            <p>https://tomermor.netlify.app</p>
        </Container>
    )
}

export default UrlShortener