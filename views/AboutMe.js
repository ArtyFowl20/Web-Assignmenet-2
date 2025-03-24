import React from "react";

const AboutMe = ({ userDetails }) => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src={userDetails.aboutMe.profilePicture}
          alt="Profile"
          className="about-profile-picture"
        />
        <div className="about-details">
          <h3>{userDetails.name}</h3>
          <p>{userDetails.aboutMe.description}</p>
          <div className="skills-interests">
            <h4>Skills</h4>
            <ul>
              {userDetails.aboutMe.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h4>Interests</h4>
            <ul>
              {userDetails.aboutMe.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;