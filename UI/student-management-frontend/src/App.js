import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './navigation';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Student Management System</h1>
        <Navigation />
        <Routes>
          <Route path="/search" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;