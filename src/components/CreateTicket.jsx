import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateTicket() {
    const [studentName, setStudentName] = useState('');
    const [dept, setDept] = useState('');
    const [year, setYear] = useState('');
    const [college, setCollege] = useState('');
    const [issues, setIssues] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const ticketData = {
            studentName,
            dept,
            year,
            college,
            issues
        };

        try {
            await axios.post('http://localhost:4000/createTicket', ticketData);
            alert('Ticket created successfully!');
            setStudentName('');
            setDept('');
            setYear('');
            setCollege('');
            setIssues('');
        } catch (error) {
            console.error(error);
            alert('There was an error creating the ticket.');
        }
    };

    return (
        <div>
            <h2>Create Ticket</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Student Name:</label>
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Year:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>College:</label>
                    <input
                        type="text"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Issues:</label>
                    <textarea
                        value={issues}
                        onChange={(e) => setIssues(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <Link to="/showTicket">List Tickets</Link>
        </div>
    );
}

export default CreateTicket;
