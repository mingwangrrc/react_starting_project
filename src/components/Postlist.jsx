import{useState} from 'react';

import Post from './Post.jsx';
import NewPost from './NewPost.jsx';
import classes from './Postlist.module.css';
import Modal from './Modal.jsx';

function PostList({isPosting,onStopPosting}){
   
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');


    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }   

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    // let modalContent;
    // if(modalIsVisible){
    //     modalContent = (
    //             <Modal onClose={hideModalHandler}>
    //                 <NewPost 
    //                     onBodyChange={bodyChangeHandler} 
    //                     onAuthorChange={authorChangeHandler} 
    //                 />
    //             </Modal>
    //             );
    // }
    return(
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                   <NewPost 
                        onBodyChange={bodyChangeHandler} 
                        onAuthorChange={authorChangeHandler} 
                        onCancel={onStopPosting}
                     />
                 </Modal>
            )}
            <ul className = {classes.posts}>
                <Post author ={enteredAuthor} body={enteredBody} />
                <Post author ="Manuel" body="This is a test post" />
            </ul>
        </>
    );
}

export default PostList;
