import{useState} from 'react';

import Post from './Post.jsx';
import NewPost from './NewPos.jsx';
import classes from './Postlist.module.css';

function PostList(){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }   
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return(
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            
            <ul className = {classes.posts}>
                <Post author ={enteredAuthor} body={enteredBody} />
                <Post author ="Manuel" body="This is a test post" />
            </ul>
        </>
    );
}

export default PostList;
