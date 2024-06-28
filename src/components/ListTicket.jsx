import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListTicket() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('http://localhost:4000/tickets');
                setTickets(response?.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching tickets: {error.message}</div>;

    return (
        <div>
            <h2>Ticket List</h2>
            <ul>
                {tickets && tickets.length > 0 ? (
                    tickets.map((ticket) => (
                        <li key={ticket._id}>
                            <p><strong>Student Name:</strong> {ticket.studentName}</p>
                            <p><strong>Department:</strong> {ticket.dept}</p>
                            <p><strong>Year:</strong> {ticket.year}</p>
                            <p><strong>College:</strong> {ticket.college}</p>
                            <p><strong>Issues:</strong> {ticket.issues}</p>
                            <hr />
                        </li>
                    ))
                ) : (
                    <h4>No tickets found.</h4>
                )}
            </ul>
        </div>
    );
}

export default ListTicket;
