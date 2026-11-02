import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

import "../styles/Education.css";

function Education() {

  return (
    <section className="education section-padding" id="education">

      <div className="container">

        <div className="section-heading">

          <span>MY ACADEMIC BACKGROUND</span>

          <h2>Education</h2>

          <p>
            My academic journey and educational qualifications.
          </p>

        </div>

        <div className="education-wrapper">

          <div className="education-icon">
            <GraduationCap size={30} />
          </div>

          <div className="education-card">

            <span className="education-level">
              BACHELOR'S DEGREE
            </span>

            <h3>Bachelor's Degree in Software Engineering</h3>

            <h4>
              Gandaki College of Engineering and Science
            </h4>

            <div className="education-details">

              <span>
                <MapPin size={15} />
                Pokhara, Nepal
              </span>

              <span>
                <CalendarDays size={15} />
                2021-2025
              </span>

            </div>

            <p>
              Developed academic knowledge and practical
              understanding of software development,
              programming, database management,
              application design and problem-solving.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;