import React, { useEffect,useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [name, setStudentName] = useState('');
    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('ID'));
            setStudentName(localStorage.getItem('Student Name'));
    }, []);
    const updateAPIData = () => {
        axios.put(`http://localhost:5000/api/student/${id}`, {
            name
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Student Name' value={name} onChange={(e) => setStudentName(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}