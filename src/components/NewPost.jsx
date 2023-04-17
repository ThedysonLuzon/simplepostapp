import classes from './NewPost.module.css';
import { useState } from 'react';

export default function NewPost(props) {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
        </p>
        <p>{enteredBody}</p>
        <p>
            <label htmlFor="name">Your name</label>
            <textarea id="name" required onChange={props.onAuthorChange} />
        </p>
    </form>
    )
}
