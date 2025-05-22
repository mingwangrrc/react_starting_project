// const name = ['Maximilian','Manuel'];
import classes from './Post.module.css'


function Post({author,body}){
    
    // const chosenName = Math.random()>0.5 ? name[0]:name[1];
    // props.author
    // props.body
    return(
            // function add(a,b){
            // return a+b;
            // }
        <li className={classes.post}>
            <p className={classes.author}>{author} </p>
            <p className={classes.text}>{body} </p>
        </li>
    );
}
    export default Post;