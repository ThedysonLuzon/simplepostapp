import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';

export default function MainHeader({onCreatePost}) {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage /> 
            Post App
        </h1>
        <p>
             <button className={classes.button} onClick={onCreatePost}>
                <MdPostAdd size={18}/> 
                Create Post

             </button>
        </p>
        </header>
    )
}
