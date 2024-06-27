import React, { useState } from 'react';
import axios from 'axios';

function PatchMethod() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        place: '',
        college: '',
        password: ''
    });
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch('http://localhost:4000/patchMethod', formData);
            setResponse(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>PATCH Method Example</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Place:</label>
                    <input type="text" name="place" value={formData.place} onChange={handleChange} />
                </div>
                <div>
                    <label>College:</label>
                    <input type="text" name="college" value={formData.college} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Submit PATCH Request</button>
            </form>
            {response && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default PatchMethod;
