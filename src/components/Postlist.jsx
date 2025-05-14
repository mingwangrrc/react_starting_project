import Post from './Post.jsx'; 
import NewPost from './NewPost.module.jsx';
import classes from './Postlist.module.css';

function PostsList(){
    return(
        <>
            <NewPost />
            <ul className = {classes.posts}>
                <Post author ="Maximilian" body="React.js is awesome" />
                <Post author ="Manuel" body="Check out the full course"/>
            </ul>
        </>
    );
}

export default PostsList;
