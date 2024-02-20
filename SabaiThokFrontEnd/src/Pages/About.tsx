import { useRef, useState } from "react";
import D2D from "../assets/Aboutusimg/D2D.png"
import Quality from "../assets/Aboutusimg/Quality.png"
import "./About.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function about() {
    
    return (
        <>
            <Navbar />

            <div className="about">
                <h2>Welcome to Sabai Thok</h2>
                <div className="box1">
                    <div className="description">
                        <p>
                            Where you can find every products that is needed for you in your day to day life on.
                            <br />
                        </p>
                    </div>
                    <div className="img">
                        <img src={""} alt="" />
                    </div>
                </div>
            </div>
            <div className="ourservices">
                <h2 className="services">Our Services</h2>
                <p>
                    Embrace the experience and let us elevate your journey towards
                    everything.
                </p>
                <div className="gridbox">
                    <div className="d2d">
                        <img src={D2D} alt="door2door" width="500" />
                    </div>
                    <div className="quality-product"></div>
                    <img src={Quality} alt="quality" width="500" />
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default about;