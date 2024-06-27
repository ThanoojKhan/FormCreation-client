import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Form from './pages/Form';
import Home from './pages/Home';
import GetMethod from './components/GetMethod';
import PatchMethod from './components/PatchMethod';
import PutMethod from './components/PutMethod';
import DeleteMethod from './components/DeleteMethod';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/get" element={<GetMethod />} />
        <Route path="/patch" element={<PatchMethod />} />
        <Route path="/put" element={<PutMethod />} />
        <Route path="/delete" element={<DeleteMethod />} />
      </Routes>
    </Router>
  );
}

export default App;