import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>FarmersBazaar</h3>
              <p>Designed and Initiated FarmersBazaar, an e-commerce platform enabling farmers to sell their products directly to consumers, fostering fair trade and eliminating middlemen to ensure better prices and increased profitability for farmers. Implemented a user-friendly interface, ensuring responsive and Integrated key features such as product listings, customer reviews, and interactive carousels for user experiences.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Node Js</li> <li>Express Js</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>ViharaYatra</h3>
              <p>
                Conceptualized and created ViharaYatra, a comprehensive platform for global travelers to explore, plan, and experience destinations worldwide. Implemented needed features such as destination search, filters, user-friendly forms, and interactive elements like carousels and modals using JavaScript to enhance functionality and user engagement.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* ✅ Fixed: svg is now properly closed, project-links moved outside it */}
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/JayaRam2884/JobPath" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>JobPath</h3>
              <p>
                Conceptualized and developed JobPath, a full-stack mobile application designed to help job seekers discover opportunities, track applications, and streamline their career journey. Implemented key features such as job search with filters, application tracking, resume upload, and real-time notifications using React Native for a seamless cross-platform experience backed by a robust Node.js REST API.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
