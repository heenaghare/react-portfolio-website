import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('workExperience');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const workExperience = [
    {
      title: 'Associate 2 Software Developer',
      company: 'Capgemini Service India',
      duration: 'Nov 2021 - Oct 2024',
      description: 'Developed and maintained web applications using React, Node.js, and REST APIs. Collaborated with cross-functional teams to deliver scalable solutions.',
    },
    {
      title: 'Web Developer',
      company: 'Evision Technoserve',
      duration: 'April 2021 - Oct 2021',
      description: 'Built responsive web applications using HTML5, CSS3, JavaScript, jQuery, Bootstrap 4, and PHP.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Savitribai Phule Pune University',
      graduationYear: '2019',
      description: 'Studied various aspects of computer science including algorithms, data structures, and programming languages.',
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'MSBTE',
      graduationYear: '2016',
      description: 'Learned core computer science principles including logic building, algorithms, and database concepts.',
    },
  ];

  const certifications = [
    {
      title: 'React Developer Certification',
      provider: 'Coursera',
      year: '2022',
      description: 'Certification demonstrating proficiency in building scalable front-end applications using React.',
    },
  ];

  const renderWorkExperience = () => (
    <div>
      {workExperience.map((job, index) => (
        <div className="card" key={index}>
          <h4>{job.title} at {job.company}</h4>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div>
      {education.map((edu, index) => (
        <div className="card" key={index}>
          <h4>{edu.degree}</h4>
          <p>{edu.institution}, Graduated {edu.graduationYear}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div>
      {certifications.map((cert, index) => (
        <div className="card" key={index}>
          <h4>{cert.title}</h4>
          <p>{cert.provider}, {cert.year}</p>
          <p>{cert.description}</p>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'workExperience':
        return renderWorkExperience();
      case 'education':
        return renderEducation();
      case 'certifications':
        return renderCertifications();
      default:
        return null;
    }
  };

  return (
    <section id="experience">
      <div className="container">
        <div className="tab-panel">
          <div className="tabs">
            <button onClick={() => handleTabChange('workExperience')} className={activeTab === 'workExperience' ? 'active' : ''}>
              Work Experience
            </button>
            <button onClick={() => handleTabChange('education')} className={activeTab === 'education' ? 'active' : ''}>
              Education
            </button>
            <button onClick={() => handleTabChange('certifications')} className={activeTab === 'certifications' ? 'active' : ''}>
              Certifications
            </button>
          </div>
          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
