import{useState} from 'react';

import Post from './Post.jsx';
import NewPost from './NewPost.jsx';
import classes from './Postlist.module.css';
import Modal from './Modal.jsx';

function PostList({isPosting,onStopPosting}){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        fetch('http://localhost:8080/posts',{
            method: 'POST',
            body: JSON.stringify(postData),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }


    return(
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                   <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                 </Modal>
            )}
            {posts.length >0 && (
            <ul className = {classes.posts}>    
                {posts.map((post) => (
                    <Post key={post.body} author={post.author} body={post.body} />
                ))}
            </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostList;
