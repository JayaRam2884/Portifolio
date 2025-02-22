import { Container } from './styles';
import ram from "../../assets/ram.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
    return (
        <Container id='about'>
            <div className="about-content">
                <ScrollAnimation animateIn='fadeInLeft'>
                    <h2>About Me</h2>
                    <p>
                        Hi there! I'm Jaya Ram, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
                    </p>
                    <p>
                        I specialize in front-end and back-end development, ensuring seamless, responsive, and user-friendly websites. My focus is on delivering quality projects while maintaining attention to detail.
                    </p>
                    <p>
                        Beyond coding, I enjoy collaborating with teams, understanding project requirements, and transforming ideas into functional digital solutions. Let's build something amazing together!
                    </p>
                </ScrollAnimation>
            </div>
            <div className="about-image">
                <ScrollAnimation animateIn='fadeInRight' delay={200}>
                    <img src={ram} alt="Jaya Ram" />
                </ScrollAnimation>
            </div>
        </Container>
    );
}