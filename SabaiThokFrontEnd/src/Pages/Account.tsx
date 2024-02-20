import { useRef, useState } from "react";
import "./Account.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function About() {
    
    return (
        <>
           <Navbar/>

           <div className="Accounttypes">
            <button className="bttn">
                <a href="/admin-log-in" className="ancher">Admin</a>
            </button>

            <button className="bttn">
                <a href="/log-in" className="ancher">Log-Out</a>
            </button>

            <button className="bttn">
                <a href="/sign-up" className="ancher">Sign-Up</a>
            </button>
            
           </div>

           <Footer/>
        </>
    );
}
export default About;