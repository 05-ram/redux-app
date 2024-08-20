import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from '../features/post/postSlice';


const PostList = () => {
    // const posts = useSelector((state) => state.post); 
    const posts = useSelector(selectAllPost); //best practice

    const renderedPost = posts.map((post) => (
        <article key={post.id} className='mb-2'>
            <h3>{post.design}</h3>
            <p>{post.skill}</p>
        </article>
    ))
    return (
        <section className='render-post mt-2'>
            {renderedPost}
        </section>
    )
}

export default PostList