import{useState} from 'react';

import Post from './Post.jsx';
import NewPost from './NewPost.jsx';
import classes from './Postlist.module.css';
import Modal from './Modal.jsx';

function PostList({isPosting,onStopPosting}){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts)=>[postData, ...existingPosts]);
    }

    return(
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                   <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                 </Modal>
            )}
            <ul className = {classes.posts}>    
                <Post author ="Manuel" body="This is a test post" />
            </ul>
        </>
    );
}

export default PostList;
