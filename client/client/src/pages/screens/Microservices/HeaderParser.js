import React, { useState, useEffect} from 'react';
import Container from "../../components/Container"
import Soon from "../../components/dev/Soon"
import axios from 'axios'

const HeaderParser = () => {

    const [data, setData] = useState({
        ipaddress: '',
        language: '',
        software: ''
    });

    const getData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/whoami')
            setData({
                ipaddress: response.data.ipaddress,
                language: response.data.language,
                software: response.data.software
             })
        } catch (error) {
            alert("Error fetching data");
            setData({
                ipaddress: '',
                language: '',
                software: ''
            });
            return;
        }
        
    }

    useEffect(() => {
        getData()
    }, []);


    return (
        <Container title="Request Header Parser" subtitle="Gives backs the ipaddress, language and the software of the clicking user">

            <h3>Example Usage:</h3>
            <ul>
                <li><a href="http://localhost:5000/api/whoami">http://localhost:5000/api/whoami</a></li>
            </ul>

            <h3>Example Output:</h3>
            <p>
                {JSON.stringify(data, null, 0)}
            </p>

        </Container>
    )
}

export default HeaderParser