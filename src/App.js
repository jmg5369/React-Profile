import React, { useEffect, useState } from 'react';
import "./app.css"
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from './components/Contact';


export default function App() {
  const[currentPage, setCurrentPage] = useState("About");
  function renderPage(currentPage) {
    if (currentPage === "About") {
      return <About/>
    }else if (currentPage === "Work") {
      return <Work/>
    }else if (currentPage === "Contact") {
      return <Contact/>
    }
  }

  return (
   <div className="app">
     <Navbar currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
     {renderPage(currentPage)}
     <Footer/>
   </div>
  );
}
