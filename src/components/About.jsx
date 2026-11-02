import { GraduationCap, Code2, Lightbulb, Target } from "lucide-react";
import "../styles/About.css";

function About() {
  const highlights = [
    {
      icon: <GraduationCap />,
      title: "Education",
      description: "Software Engineering Graduate",
    },
    {
      icon: <Code2 />,
      title: "Development",
      description: "Full-Stack Web Development",
    },
    {
      icon: <Lightbulb />,
      title: "Problem Solving",
      description: "Debugging and logical thinking",
    },
    {
      icon: <Target />,
      title: "Career Goal",
      description: "Growing as a Software Developer",
    },
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="container">

        <div className="section-heading">
          <span>GET TO KNOW ME</span>
          <h2>About Me</h2>
          <p>
            A little introduction about my background
            and passion for software development.
          </p>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              Passionate about building
              <span> meaningful software solutions.</span>
            </h3>

            <p>
              I am a Software Engineering graduate from
              Gandaki College of Engineering and Science,
              passionate about developing practical,
              user-friendly and reliable software applications.
            </p>

            <p>
              I have hands-on experience working with
              technologies such as React.js, JavaScript,
              C#, ASP.NET Core Web API and SQL Server.
              Through academic and personal projects,
              I have gained experience in frontend development,
              backend integration, database management
              and application development.
            </p>

            <p>
              I am continuously improving my knowledge of
              software engineering practices, including
              clean code, debugging, API development,
              version control, testing and technical documentation.
            </p>

            <p>
              My goal is to contribute to real-world software
              projects, collaborate with experienced developers
              and continuously grow as a software engineer.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div className="highlight-card" key={index}>
                <div className="highlight-icon">
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;