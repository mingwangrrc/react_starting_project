// const name = ['Maximilian','Manuel'];
import classes from './Post.module.css'


function Post(props){
    // const chosenName = Math.random()>0.5 ? name[0]:name[1];
    // props.author
    // props.body
    return(
            // function add(a,b){
            // return a+b;
            // }
        <li className={classes.post}>
        <p className={classes.author}>{props.author} </p>
        <p className={classes.text}>{props.body} </p>
        </li>
    );
}
    export default Post;