import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const[post , setPost] = useState({});
    const[comments,setComments] = useState([]);
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    useEffect(()=> {
        const url =`http://jsonplaceholder.typicode.com/comments?postid=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h1>This is Post Detail:{id} </h1>
            <h1>This is {post.id}</h1>
            <p>{post.body}</p>
            <p>Comments count {comments.length}</p>
            {
                comments.map(com => <Comment comment={com}></Comment>)
            }
        </div>
    );
};

export default PostDetail;