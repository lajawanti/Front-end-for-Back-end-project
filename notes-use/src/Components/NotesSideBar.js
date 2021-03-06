import React from 'react';
import './Style.css'
import { Link } from 'react-router-dom';
import './Style.css';


const NotesSideBar = (props) => {
    return (
        <div className = "side-bar">
            <h1>My <br/>Notes </h1>
       {/* <button>View Your Notes</button>
           <button>+Create New Note</button>*/}
            
            <Link to = "/notes" className = "no-decoration">
                <button> View Your Notes </button>
            </Link>

            <Link to = "/create" className = "no-decoration">
                <button> Create New Note </button>
            </Link>
           
        </div>
    )
}


export default NotesSideBar;

