import "./styles/Hero.css"
export default function Hero() {
    return (
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, I&apos;m <span className="hero-highlight">Arisha Karim</span>
        </h1>
        <p className="hero-description">
          A Passionate Developer Specializing in Frontend and Backend Development.
          My journey is about mastering the latest AI tools to enhance web development.
        </p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
    );
  }
  