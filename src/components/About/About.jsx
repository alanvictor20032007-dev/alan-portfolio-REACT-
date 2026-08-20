import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        <figure className="profile-figure">
          <img
            src="/LINKEDIN PFP.jpeg"
            alt="Alan Victor"
            width="150"
            height="200"
          />

          <figcaption>Alan Victor</figcaption>
        </figure>

        <div className="about-text">
          <p>
            I love working and finding patterns in data to problem solve and I
            also love unleashing my creativity using web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;