import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">What I can do as a Full Stack Developer</div>
              <p>1. Gather and analyze client requirements.</p>
              <p>2. Design responsive and user-friendly UI using modern frontend frameworks.</p>
              <p>3. Structure scalable databases for dynamic web apps.</p>
              <p>4. Develop web applications using both frontend and backend technologies.</p>
              <p>5. Integrate APIs for seamless client-server communication.</p>
              <p>6. Deploy websites and applications on platforms like Netlify or traditional hosting.</p>
              <p>7. Manage cPanel and DNS settings for domain and hosting operations.</p>
            </div>

            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML5</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>CSS3 / Tailwind</span>
                  <span>85%</span>
                </div>
                <div className="line css"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>75%</span>
                </div>
                <div className="line js"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>React.js</span>
                  <span>70%</span>
                </div>
                <div className="line react"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>Node.js</span>
                  <span>65%</span>
                </div>
                <div className="line node"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>Express.js</span>
                  <span>60%</span>
                </div>
                <div className="line express"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>MongoDB</span>
                  <span>60%</span>
                </div>
                <div className="line mongo"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>Git & GitHub</span>
                  <span>80%</span>
                </div>
                <div className="line git"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
