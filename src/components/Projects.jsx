import {
  ExternalLink,
  Globe,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import "../styles/Projects.css";

function Projects() {

  const projects = [
    {
      title: "Cake Management System",
      category: "Full-Stack Web Application",

      status: "Live Project",

      description:
        "A full-stack cake management system developed using React.js and ASP.NET Core Web API. The application provides customer-facing features and administrative functionality for managing cakes, customers and orders.",

      image: "/images/cake-management.PNG",

      technologies: [
        "React.js",
        "ASP.NET Core",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
      ],

      features: [
        "Customer registration and login",
        "Cake browsing and product management",
        "Cake customization and ordering",
        "Shopping cart and checkout",
        "Order management",
        "REST API integration",

      ],

      github: "https://github.com/SapnaAcharya",

      demo: "https://sweetcakes-np.vercel.app",
    },

     {
    title: "E-Commerce Admin Dashboard",
    category: "Full-Stack Web Application",
    status: "Source Code Available",

    description:
      "A full-stack e-commerce administration dashboard developed using React.js, Node.js, Express.js and MySQL. The application provides centralized management of products, categories, brands, customers and orders, along with sales analytics.",

    image: "/images/ecommerce-site.PNG",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Bootstrap 5",
      "Recharts",
      "Multer",
    ],

    features: [
      "Admin dashboard with sales analytics",
      "Product CRUD and image uploads",
      "Category and brand management",
      "JWT authentication and protected routes",
      "Customer and order management",
      "Sales overview and revenue statistics",
      "Search, pagination and form validation",
    ],

    github: "https://github.com/SapnaAcharya/ecommerce-site",
    demo: "",
  },
  ];

  return (
    <section className="projects section-padding" id="projects">

      <div className="container">

        <div className="section-heading">

          <span>MY DEVELOPMENT WORK</span>

          <h2>Featured Projects</h2>

          <p>
            Practical applications and development projects
            demonstrating my programming knowledge,
            technical skills and problem-solving abilities.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article className="project-card" key={index}>

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className={
                  project.demo
                    ? "project-status live"
                    : "project-status source"
                }>
                  {project.status}
                </span>

              </div>

              <div className="project-body">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">

                  <h4>Key Features</h4>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                </div>

                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={17} />
                    Source Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Globe size={17} />
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;