import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        age: '',
        className: '',
        phoneNumber: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/students', student)
            .then(response => alert('Student added successfully!'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
                <input type="number" placeholder="Age" value={student.age} onChange={(e) => setStudent({ ...student, age: e.target.value })} required />
                <input type="text" placeholder="Class" value={student.className} onChange={(e) => setStudent({ ...student, className: e.target.value })} required />
                <input type="text" placeholder="Phone Number" value={student.phoneNumber} onChange={(e) => setStudent({ ...student, phoneNumber: e.target.value })} required />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;