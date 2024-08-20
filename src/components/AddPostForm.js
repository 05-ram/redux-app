import React, { useState } from 'react'

const AddPostForm = () => {
    const [skill, setSkill] = useState('');
    const [design, setDesign] = useState('');

    const handleChange = e => setDesign(e.target.value);
    const contentChange = e => setDesign(e.target.value);
    return (
        <>
            <div>AddPostFrom</div>
            <form>
                <label htmlFor="skill">Enter the skill</label>
                <input type="text" id='skill' name='skill' value={skill} onChange={handleChange} />
                <label htmlFor="design">Enter the skill</label>
                <input type="text" id='design' name='design' value={design} onChange={contentChange} />
            </form>
        </>
    )
}

export default AddPostForm