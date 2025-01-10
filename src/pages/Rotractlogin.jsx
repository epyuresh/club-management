import React, { useState } from 'react';
import './Rotractlogin.css';
import Dashboard from "../components/Dashboard"; // Assuming this is the Navbar
import Sidebar from "../components/Sidebar";

const Rotractlogin = () => {
    const [enrollmentKey, setEnrollmentKey] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enrollment Key Submitted:", enrollmentKey);
    };

    return (
        <div><Dashboard />
        <div className="rotaract-login-page"> 
        <Sidebar />
        <div className="rotaract-container">
            
            
            <div className="login-content">
           
                <div className="rotractlogo-header">
                    <img src="/rotractuok.png" alt="Rotract Logo" className="rotractlogo" />
                    <img src="/100.jpg" alt="Decorative" className="bottom-left-image" />
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
