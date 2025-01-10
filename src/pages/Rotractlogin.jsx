import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Rotractlogin.css';
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

const Rotractlogin = () => {
    const [enrollmentKey, setEnrollmentKey] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/100.jpg",
        "/101.jpg",
        "/102.jpg",
        "/103.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enrollment Key Submitted:", enrollmentKey);
    };

    return (
        <div>
            <Dashboard />
            <div className="rotaract-login-page">
                <Sidebar />
                <div className="rotaract-container">
                    <div className="typewriter-effect">
                        <h1>Uniting Our Community with</h1>
                        <h2>
                            <Typewriter
                                words={['passion.', 'innovation.', 'determination.']}
                                loop={0} // Infinite loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                    </div>
                    <div className="login-content">
                        <div className="rotractlogo-header">
                            <img
                                src="/rotractuok.png"
                                alt="Rotract Logo"
                                className="rotractlogo"
                            />
                            <img src={images[currentImageIndex]} alt="Decorative" className="bottom-left-image" />
                            
                            <div className="heading-container">
                                <h1 className="main-heading">Join the Movement make the Difference</h1>
                                <h2 className="sub-heading">Self Enrollment</h2>
                            </div>
                        </div>
                        <form className="enrollment-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter Enrollment Key"
                                value={enrollmentKey}
                                onChange={(e) => setEnrollmentKey(e.target.value)}
                                className="enrollment-input"
                            />
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rotractlogin;
