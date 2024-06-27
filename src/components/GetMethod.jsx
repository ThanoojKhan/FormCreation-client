import React, { useState } from 'react';
import axios from 'axios';

function GetMethod() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getMethod');
            setUser(response.data.data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch User Data</button>
            {user && (
                <div>
                    <h2>User Details:</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Place: {user.place}</p>
                    <p>College: {user.college}</p>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default GetMethod;
