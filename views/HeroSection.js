import React from "react";

const HeroSection = ({ userDetails }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <img
          src={userDetails.aboutMe.profilePicture}
          alt="Profile"
          className="hero-profile-picture"
        />
        <h1>{userDetails.name}</h1>
        <p>{userDetails.bio}</p>
        <button className="hero-cta">View My Work</button>
      </div>
    </section>
  );
};

export default HeroSection;