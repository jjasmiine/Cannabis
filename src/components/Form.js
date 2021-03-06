import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Name</label>
                <input type='text'></input>

                <label>Email</label>
                <input type='text'></input>

                <label>Subject</label>
                <input type='text'></input>

                <label>Message</label>
                <textarea rows='6' placeholder='Insert text here' />

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form