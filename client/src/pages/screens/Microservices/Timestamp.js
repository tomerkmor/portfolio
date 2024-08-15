import React, { useState, useEffect } from 'react';
import Container from "../../components/Container"
import Soon from "../../components/dev/Soon"
import axios from 'axios'

const Timestamp = () => {
    const [inputVal, setInputVal] = useState('');
    const [output, setOutput] = useState({
        unix: '',
        utc: ''
    });


    const btnClicked = async(e) => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/date/" + inputVal)
            setOutput({
                unix: response.data.unix,
                utc: response.data.utc
            });
        } catch (error) {
            console.log(error);
            alert("Error fetching data");
            setOutput({
                unix: '',
                utc: ''
            });
            return;
        }
        setInputVal("")
    }

    // render the initial value of ''
    useEffect(() => {
            btnClicked()
    }, []);

    return (
        <Container title="Timestamp" subtitle="convert second passed since 01/01/1970 to a date">
            <h3>Example Usage:</h3>
            <ul>
                <li><a href={process.env.REACT_APP_API_URL + "/date/25-12-25"}>loccccalhost:5000/api/2015-12-25</a></li>
                <li><a href={process.env.REACT_APP_API_URL + "/date/1451001600000"}>localhost:5000/api/1451001600000</a></li>
            </ul>

            <h3>Example Output:</h3>
            <p>
                {'{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}'} 
            </p>

            <br /><br />
            <h2>Simplified input tester:</h2>
            <p>1430784000000 / 2015-05-05 </p>
            <input
                id="input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                type="text"
            />
            <button id="convert-btn" onClick={btnClicked}>
                Convert Button
            </button>
            <div>
            <pre id="output">{JSON.stringify(output, null, 0)}</pre>
            </div>
        </Container>
    )
}

export default Timestamp