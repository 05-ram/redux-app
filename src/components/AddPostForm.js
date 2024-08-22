import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../features/post/postSlice';
import { nanoid } from '@reduxjs/toolkit';
import { selectAllUsers } from '../features/users/userSlice';


const AddPostForm = () => {
    const [skill, setSkill] = useState('');
    const [design, setDesign] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();
    const handleChange = e => setSkill(e.target.value);
    const contentChange = e => setDesign(e.target.value);
    const onAuthorChange = e => setUserId(e.target.value);


    const handleClick = () => {
        if (skill && design) {
            dispatch(
                postAdded(skill, design, userId)
            )
            setSkill('');
            setDesign('');
        }
    }

    const userOptions = users.map((user) => (
        < option key={user.id} value={user.id} >
            {user.name}
        </option >
    ))
    return (
        <>
            <div>AddPostFrom</div>
            <form className='post-form'>
                <label htmlFor="skill">Enter the Skill</label><br />
                <input type="text" id='skill' name='skill' value={skill} onChange={handleChange} className='w-100' /> <br /><br />

                <label htmlFor='author'>Author:</label><br />
                <select id='author' value={userId} onChange={onAuthorChange}>
                    <option value=''></option>
                    {userOptions}
                </select><br /><br />

                <label htmlFor="design">Enter the Design</label><br />
                <input type="text" id='design' name='design' value={design} onChange={contentChange} className='w-100' /><br /><br />

                <button type='button' onClick={handleClick} className='btn-green'>Save</button>
            </form>
        </>
    )
}

export default AddPostForm;


// 2.47