import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
    const [name, setStudentName] = useState('')
    const postData = () => {
        axios.post("http://localhost:5000/api/student/", {
            name
        })
    }
    return (
        <div>
  <Form className="create-form">
    <Form.Field>
      <label>Student Name</label>
      <input placeholder='Name' onChange={(e) => setStudentName(e.target.value)} />
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
  </div>
    )
    }
