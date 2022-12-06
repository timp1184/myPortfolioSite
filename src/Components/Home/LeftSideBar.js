import { Github, Linkedin, Instagram, Twitter } from 'react-bootstrap-icons';

export default ()=>{
    return(
        <div orientation="left" className="left-side-bar d-none d-lg-flex">
            <ul className="social-list">
            <li><a href="#" aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a></li>
            <li><a href="#" aria-label="GitHub" target="_blank" rel="noreferrer"><Linkedin /></a></li>
            <li><a href="#" aria-label="GitHub" target="_blank" rel="noreferrer"><Instagram /></a></li>
            <li><a href="#" aria-label="GitHub" target="_blank" rel="noreferrer"><Twitter /></a></li>
            </ul>
        </div>
    )
}


