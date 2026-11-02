import {
  Code2,
  Monitor,
  Server,
  Database,
  GitBranch,
  Wrench,
  TestTube,
  FileText,
} from "lucide-react";

import "../styles/Skills.css";

function Skills() {

  const skillGroups = [
    {
      icon: <Code2 />,
      title: "Programming Languages",
      description: "Languages used for application development.",
      skills: ["C#", "JavaScript", "Python", "PHP"],
    },
    {
      icon: <Monitor />,
      title: "Frontend Development",
      description: "Building responsive and interactive interfaces.",
      skills: ["React.js", "HTML5", "CSS3", "Vite"],
    },
    {
      icon: <Server />,
      title: "Backend Development",
      description: "Developing application logic and APIs.",
      skills: ["ASP.NET Core Web API", "Node.js", "Express.js", "Laravel"],
    },
    {
      icon: <Database />,
      title: "Database Management",
      description: "Working with relational and NoSQL databases.",
      skills: ["SQL Server", "MySQL", "MongoDB", "Entity Framework Core"],
    },
    {
      icon: <GitBranch />,
      title: "Version Control",
      description: "Managing source code and collaboration.",
      skills: ["Git", "GitHub", "Branching", "Git Commits"],
    },
    {
      icon: <Wrench />,
      title: "Development Tools",
      description: "Tools used during software development.",
      skills: ["VS Code", "Visual Studio", "Postman", "Swagger"],
    },
    {
      icon: <TestTube />,
      title: "Testing & Debugging",
      description: "Checking application behaviour and resolving issues.",
      skills: ["Unit Testing Fundamentals", "API Testing", "Debugging", "Validation"],
    },
    {
      icon: <FileText />,
      title: "Documentation",
      description: "Maintaining understandable technical information.",
      skills: ["README Files", "API Documentation", "Setup Instructions"],
    },
  ];

  return (
    <section className="skills section-padding" id="skills">
      <div className="container">

        <div className="section-heading">
          <span>MY TECHNICAL EXPERTISE</span>
          <h2>Technical Skills</h2>
          <p>
            Technologies, frameworks and tools I use
            to develop and maintain software applications.
          </p>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-card-header">
                <div className="skill-icon">
                  {group.icon}
                </div>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;