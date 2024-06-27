import React, { useState } from 'react';
import axios from 'axios';

function DeleteMethod() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);


  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:4000/deleteMethod');
      setResponse(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>DELETE Method Example</h2>
      <div>
        <button onClick={handleDelete}>Delete User</button>
      </div>
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

export default DeleteMethod;
