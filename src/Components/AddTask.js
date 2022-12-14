import React, { useState } from 'react'
import Swal from 'sweetalert2'
import '../index.css'

const AddTask = ({ onSave }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill your task and day or close the form!'
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in you task!'
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in you day!'
            })
        } else {
            onSave({ text, day })
        }
        setDay('')
        setText('')
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='add day and time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-block'>Save Task</button>
        </form>
    );
}

export default AddTask
