import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from '../features/post/postSlice';
import { nanoid } from '@reduxjs/toolkit';


const AddPostForm = () => {
    const [skill, setSkill] = useState('');
    const [design, setDesign] = useState('');
    const dispatch = useDispatch();
    const handleChange = e => setSkill(e.target.value);
    const contentChange = e => setDesign(e.target.value);

    const handleClick = () => {
        if (skill && design) {
            dispatch(
                postAdded(
                    { id: nanoid(), skill, design })
            )
        }
    }
    return (
        <>
            <div>AddPostFrom</div>
            <form className='post-form'>
                <label htmlFor="skill">Enter the Skill</label><br />
                <input type="text" id='skill' name='skill' value={skill} onChange={handleChange} className='w-100' /> <br /><br />

                <label htmlFor="design">Enter the Design</label><br />
                <input type="text" id='design' name='design' value={design} onChange={contentChange} className='w-100' /><br /><br />

                <button type='button' onClick={handleClick} className='btn-green'>Save</button>
            </form>
        </>
    )
}

export default AddPostForm;


// 2.28