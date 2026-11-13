import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Intern</h4>
                <h5>Fiserv · Chennai</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Jul 2026 – Oct 2026. Developed Spring Boot REST APIs for
              enterprise billing workflows and built a Python-based agentic
              extraction framework for automated data collection across network
              environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Velocity AI · Chennai</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Jan 2025 – Mar 2025. Built responsive React interfaces, integrated
              REST and GraphQL APIs for real-time updates, and collaborated with
              backend and design teams to deliver optimized, pixel-perfect
              experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Extraction Intern</h4>
                <h5>Advist Global · New Delhi</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Sep 2022 – Dec 2022. Extracted and cleaned 5,000+ records from
              PDFs, spreadsheets, and APIs with Python and Pandas, helping
              automate data collection and standardize unstructured datasets with
              90% accuracy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Head</h4>
                <h5>Arrowdev Club · SRM University</h5>
              </div>
              <h3>2023–Now</h3>
            </div>
            <p>
              Spring 2023 – Present. Lead a 15+ member team and shape the
              technical direction for coding workshops, hackathons, and seminars,
              including 3+ large-scale events with 100+ participants each.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
