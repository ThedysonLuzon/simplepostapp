import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import Modal from "./Modal";

export default function PostsList() {
    const [modalIsvisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler(){
        setModalIsVisible(false);
    }
    
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    
    let modalContent;
    if(modalIsvisible) {
        modalContent = <Modal onClose={hideModalHandler}>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
            />
        </Modal>
    }


  return (

    <>
    {modalContent}
    
    <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Troy" body="I am also a guy"/>
    </ul>
    
    </>
    )
}
