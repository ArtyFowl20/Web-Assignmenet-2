import React, { useState } from "react";
import "./DataEntryPage.css"; // Import the CSS file

const DataEntryPage = () => {
  // State for user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    bio: "",
    intro: "",
    aboutMe: {
      profilePicture: null, // Store the uploaded file
      skills: [], // Array for skills
      interests: [], // Array for interests
      description: "",
    },
    projects: [], // Array for projects
    socialMedia: [],
  });

  // State for a single skill entry
  const [skillEntry, setSkillEntry] = useState("");

  // State for a single interest entry
  const [interestEntry, setInterestEntry] = useState("");

  // State for a single project entry
  const [projectEntry, setProjectEntry] = useState({
    title: "",
    description: "",
    githubLink: "",
  });

  // State for a single social media entry
  const [socialMediaEntry, setSocialMediaEntry] = useState({
    name: "",
    url: "",
  });

  // Handle input changes for user details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  // Handle profile picture upload
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserDetails({
        ...userDetails,
        aboutMe: {
          ...userDetails.aboutMe,
          profilePicture: URL.createObjectURL(file), // Create a URL for the uploaded file
        },
      });
    }
  };

  // Handle input changes for about me section
  const handleAboutMeChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      aboutMe: {
        ...userDetails.aboutMe,
        [name]: value,
      },
    });
  };

  // Handle input changes for social media entry
  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setSocialMediaEntry({
      ...socialMediaEntry,
      [name]: value,
    });
  };

  // Add social media entry to the list
  const addSocialMedia = () => {
    if (socialMediaEntry.name && socialMediaEntry.url) {
      setUserDetails({
        ...userDetails,
        socialMedia: [...userDetails.socialMedia, socialMediaEntry],
      });
      setSocialMediaEntry({ name: "", url: "" }); // Reset the form
    }
  };

  // Add a skill
  const addSkill = () => {
    if (skillEntry.trim()) {
      setUserDetails({
        ...userDetails,
        aboutMe: {
          ...userDetails.aboutMe,
          skills: [...userDetails.aboutMe.skills, skillEntry],
        },
      });
      setSkillEntry(""); // Clear the input
    }
  };

  // Remove a skill
  const removeSkill = (index) => {
    const updatedSkills = userDetails.aboutMe.skills.filter((_, i) => i !== index);
    setUserDetails({
      ...userDetails,
      aboutMe: {
        ...userDetails.aboutMe,
        skills: updatedSkills,
      },
    });
  };

  // Add an interest
  const addInterest = () => {
    if (interestEntry.trim()) {
      setUserDetails({
        ...userDetails,
        aboutMe: {
          ...userDetails.aboutMe,
          interests: [...userDetails.aboutMe.interests, interestEntry],
        },
      });
      setInterestEntry(""); // Clear the input
    }
  };

  // Remove an interest
  const removeInterest = (index) => {
    const updatedInterests = userDetails.aboutMe.interests.filter((_, i) => i !== index);
    setUserDetails({
      ...userDetails,
      aboutMe: {
        ...userDetails.aboutMe,
        interests: updatedInterests,
      },
    });
  };

  // Handle input changes for project entry
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectEntry({
      ...projectEntry,
      [name]: value,
    });
  };

  // Add a project
  const addProject = () => {
    if (projectEntry.title.trim() && projectEntry.description.trim()) {
      setUserDetails({
        ...userDetails,
        projects: [...userDetails.projects, projectEntry],
      });
      setProjectEntry({ title: "", description: "", githubLink: "" }); // Clear the form
    }
  };

  // Remove a project
  const removeProject = (index) => {
    const updatedProjects = userDetails.projects.filter((_, i) => i !== index);
    setUserDetails({
      ...userDetails,
      projects: updatedProjects,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", userDetails);
    // TODO: Redirect to the portfolio page with the userDetails as props
  };

  return (
    <div className="data-entry-page">
      <h1>Portfolio Data Entry</h1>
      <form onSubmit={handleSubmit}>
        {/* Basic Details */}
        <div>
          <h2>Basic Details</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Bio:</label>
            <input
              type="text"
              name="bio"
              value={userDetails.bio}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Intro:</label>
            <textarea
              name="intro"
              value={userDetails.intro}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* About Me Section */}
        <div>
          <h2>About Me</h2>
          <div>
            <label>Profile Picture:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureUpload}
            />
            {userDetails.aboutMe.profilePicture && (
              <img
                src={userDetails.aboutMe.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            )}
          </div>

          {/* Skills */}
          <div>
            <label>Skills:</label>
            <input
              type="text"
              value={skillEntry}
              onChange={(e) => setSkillEntry(e.target.value)}
              placeholder="Enter a skill"
            />
            <button type="button" onClick={addSkill}>
              Add Skill
            </button>
            <ul className="skills-list">
              {userDetails.aboutMe.skills.map((skill, index) => (
                <li key={index}>
                  {skill}
                  <button type="button" onClick={() => removeSkill(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div>
            <label>Interests:</label>
            <input
              type="text"
              value={interestEntry}
              onChange={(e) => setInterestEntry(e.target.value)}
              placeholder="Enter an interest"
            />
            <button type="button" onClick={addInterest}>
              Add Interest
            </button>
            <ul className="interests-list">
              {userDetails.aboutMe.interests.map((interest, index) => (
                <li key={index}>
                  {interest}
                  <button type="button" onClick={() => removeInterest(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={userDetails.aboutMe.description}
              onChange={handleAboutMeChange}
            />
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2>Projects</h2>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={projectEntry.title}
              onChange={handleProjectChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={projectEntry.description}
              onChange={handleProjectChange}
            />
          </div>
          <div>
            <label>GitHub Link:</label>
            <input
              type="text"
              name="githubLink"
              value={projectEntry.githubLink}
              onChange={handleProjectChange}
            />
          </div>
          <button type="button" onClick={addProject}>
            Add Project
          </button>
          <ul className="project-list">
            {userDetails.projects.map((project, index) => (
              <li key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink}>GitHub</a>
                <button type="button" onClick={() => removeProject(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <button type="submit">Generate Portfolio</button>
      </form>
    </div>
  );
};

export default DataEntryPage;