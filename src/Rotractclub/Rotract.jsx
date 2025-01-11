import React, { useState, useEffect } from "react";
import "./Rotract.css";
import { Typewriter } from "react-simple-typewriter";
import Rotractnav from "../components/Rotractnav";

const Rotract = () => {
  const images = [
    "/r100.jpg",
    "/r101.jpg",
    "/r102.jpg",
    "/r103.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [images.length]);

  // Scroll animation logic
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect(); // Cleanup observer when component unmounts
    };
  }, []);

  const avenues = [
    {
      title: "Club Service",
      description:
        "We work together to strengthen fellowship among our members through continuous and coordinated teamwork.",
      icon: "/rr1.png", // Replace with your actual icon path
    },
    {
      title: "Community Service",
      description:
        "Our primary intention is to spread the essence of true community service through every step we take and every project we do.",
      icon: "/rr2.png",
    },
    {
      title: "Professional Development",
      description:
        "Our main purpose is to encourage our members and fellow Rotaractors to serve the community through their skills, to share them with others and learn through fellowship.",
      icon: "/rr3.png",
    },
    {
      title: "International Service",
      description:
        "Our aim is to build up fellowships with Rotaractors around the world but also to promote our culture and heritage and promote humanitarian work around the world.",
      icon: "/rr4.png",
    },
    {
      title: "Sports and Recreational Activities",
      description:
        "Our main aim is to encourage positive development in the sportsmanship of the club members & their enthusiasm regarding sports.",
      icon: "/rr5.png",
    },
  ];
  const project=[
    
  ]

  return (
    <div>
      <Rotractnav />

{/* Background Section */}
      
      <div
        className="background-container"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        
        <div className="text-overlay">
          <h1>
            Join the global movement of young leaders who are
            <br />
            developing innovative solutions to the world’s most
            <br />
            <div className="typewriter-text2">
              <Typewriter
                words={["urgent problems.", "critical issues.", "global crises."]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
                className="typewriter-text2"
              />
            </div>
          </h1>
        </div>
      </div>

      {/* Interface Below the Background */}
      <div className="interface-container">
        <header className="interface-header animate-on-scroll">
          <h1>Welcome to Rotaract Club of University of Kelaniya</h1>
          <p>Making a Positive Impact on the Society since 2010</p>
        </header>

        <div className="interface-content">
          <div className="intro animate-on-scroll">
            <p>
              Welcome to the Rotaract Club of the University of Kelaniya! We’re
              passionate about serving our community through meaningful projects
              while fostering lasting friendships among our members. Our
              commitment to service not only benefits society but also facilitates
              personal growth and leadership development for our members.
            </p>
            <p>
              Join us in making a difference while building lifelong connections
              and realizing your potential. Together, we create positive change in
              the world and empower each other to thrive.
            </p>
          </div>

          <div className="images animate-on-scroll">
            <img src="/r101.jpg" alt="Group 1" className="image" />
            <img src="/r102.jpg" alt="Group 2" className="image" />
            <img src="/r102.jpg" alt="Group 3" className="image" />
            <img src="/r102.jpg" alt="Group 3" className="image" />
          </div>

          <div className="video-section animate-on-scroll">
            <p>Take a look at Project 'Mathru'</p>
            <div className="video-placeholder">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1wDJICF5C7Y?si=uF4pE1V5ikm653kX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Main Avenues Interface */}
      {/* Main Avenues Interface */}
      <div className="avenues-container">
        <h2>Main Avenues</h2>
        <div className="avenues">
          {avenues.map((avenue, index) => (
            <div
              key={index}
              className="avenue-card animate-on-scroll"
            >
              <img
                src={avenue.icon}
                alt={`${avenue.title} Icon`}
                className="avenue-icon"
              />
              <h3>{avenue.title}</h3>
              <p>{avenue.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* project interface*/}

      <div className="project-rotract animate-on-scroll">
        
      <h1 className="project-title">Our Projects, Your Community, Brighter Futures</h1>
      <p className="project-tagline">"The Ocean and Biodiversity Conservation project "ස්වභාසමුද්‍ර", organized by the <br /> Community Service Avenue" </p>
      <div className="project-images">
        <img src="/r100.jpg" alt="Image 1" className="project-image" />
        <img src="/r100.jpg" alt="Image 2" className="project-image" />
        <img src="/r100.jpg" alt="Image 3" className="project-image large" />
        <img src="/r100.jpg" alt="Image 4" className="project-image" />
        <img src="/r100.jpg" alt="Image 5" className="project-image" />
      </div>
    </div>
    {/* report interface*/}
    <div className="report-container animate-on-scroll">
      {/* Left section with text */}
      <div className="report-left-section">
        <h1>The Annual Report is now published!</h1>
        <p>
          Presenting to you the Annual Report of Rotaract Club of University
          of Kelaniya for the Rotary International Year 2023-24.
        </p>
        <p>Take a glimpse on our journey through the year!</p>
        <button className="report-button" onClick={() => window.location.href = 'link-to-your-report.pdf'}>Click here</button>
      </div>

      {/* Right section with image */}
      <div className="report-right-section">
        <img src="Annualrotract.jpg" alt="Annual Report" />
      </div>
    </div>
    </div>
  );
};

export default Rotract;