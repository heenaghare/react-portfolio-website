// src/components/Home.js
import { useSpring, animated } from 'react-spring';
import './home.css';
import Slider from '../slider/Slider'; // Optional if you're using a carousel
import { Link } from 'react-router-dom';
import profileImage from '../../asset/photo.jpeg'; // Use your image

const Home = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.section style={fade} className="home" id="home">
      <Slider />
      <div className="home-content">
        <div className="home-text">
          <h1 className="text-1">Hi, I’m <span className="highlight">Heena Ghare</span></h1>
          <p className="text-2">Frontend Developer</p>
          <p className="intro-text">
            I specialize in building beautiful, responsive, and functional web applications. Passionate about clean code and great user experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/project">
              <button className="cta-button">View My Work</button>
            </Link>
            <a href="/heena-ghare-resume.pdf" download className="cta-button secondary">
  Download Resume
</a>

          </div>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Heena Ghare" />
        </div>
      </div>
    </animated.section>
  );
};

export default Home;
