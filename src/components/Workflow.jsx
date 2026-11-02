import {
  GitBranch,
  Bug,
  TestTube,
  Code2,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

import "../styles/Workflow.css";

function Workflow() {

  const practices = [
    {
      icon: <Code2 />,
      title: "Clean Code",
      description:
        "Writing readable, structured and maintainable code using appropriate naming conventions and reusable components.",
    },
    {
      icon: <GitBranch />,
      title: "Version Control",
      description:
        "Using Git and GitHub to track changes, manage repositories and maintain project history.",
    },
    {
      icon: <TestTube />,
      title: "Testing",
      description:
        "Checking application functionality, validating inputs and learning to implement automated unit tests.",
    },
    {
      icon: <Bug />,
      title: "Debugging",
      description:
        "Identifying reproducible issues, investigating errors and implementing appropriate fixes.",
    },
    {
      icon: <ShieldCheck />,
      title: "API Development",
      description:
        "Working with REST APIs, handling HTTP requests and responses, and implementing input validation.",
    },
    {
      icon: <BookOpen />,
      title: "Documentation",
      description:
        "Maintaining README files, setup instructions, API documentation and technical notes.",
    },
  ];

  return (
    <section className="workflow section-padding" id="workflow">

      <div className="container">

        <div className="section-heading">

          <span>HOW I WORK</span>

          <h2>My Development Practices</h2>

          <p>
            My approach to writing, testing,
            debugging and maintaining software applications.
          </p>

        </div>

        <div className="workflow-grid">

          {practices.map((item, index) => (

            <div className="workflow-card" key={index}>

              <div className="workflow-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Workflow;