import React from "react";

export default function Navbar(props) {
   const {setCurrentPage} = props; 
    return(
        <header>
        <div>
            <h1 className="log">James Maxwell Gorodesky</h1>
        </div>
        <div className="nav">
            <a onClick={()=> setCurrentPage("Work")} href="#work">Work</a>
            <a onClick={()=> setCurrentPage("About")} href="#aboutme">About</a>
            <a onClick={()=> setCurrentPage("Contact")} href="#contactme">Contact</a>
        </div>
    </header>
    ) 
} 