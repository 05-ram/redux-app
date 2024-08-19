import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postSlice';


const PostList = () => {
    // const posts = useSelector((state) => state.post); 
    const posts = useSelector(selectAllPost); //best practice

    const renderedPost = posts.map((post) => (
        <article key={post.id}>
            <h3>{post.design}</h3>
            <p>{post.skill}</p>
        </article>
    ))
    return (
        <section>
            {renderedPost}
        </section>
    )
}

export default PostList