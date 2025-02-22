import { Container } from './styles';
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import JavaIcon from "../../assets/java.png";
import ScrollAnimation from "react-animate-on-scroll";

const skills = [
    { icon: htmlIcon, name: 'HTML' },
    { icon: cssIcon, name: 'CSS' },
    { icon: jsIcon, name: 'JavaScript' },
    { icon: nodeIcon, name: 'Node.js' },
    { icon: reactIcon, name: 'React' },
    { icon: bootstrapIcon, name: 'Bootstrap' },
    { icon: JavaIcon, name: 'Java' }
];

export function Skills() {
    return (
        <Container id='skills'>
            <ScrollAnimation animateIn='fadeInLeft' style={{padding:'200px'}}>
                <h2>Skills</h2>
                <div className='skills-row' style={{ display: 'flex', gap: '1.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {skills.map((skill, index) => (
                        <div className='flip-card' key={index} style={{ width: '200px', height: '200px' }}>
                            <div className='flip-card-inner' style={{ width: '100%', height: '100%' }}>
                                <div className='flip-card-front' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
                                    <img src={skill.icon} alt={`${skill.name} icon`} className='skill-icon' style={{ width: '100px', height: '100px' }} />
                                </div>
                                <div className='flip-card-back' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', color: 'white', border: '5px solid white', transform: 'rotateY(180deg)' }}>
                                    <p style={{ fontSize: '32px', margin: "0" }}>{skill.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollAnimation>
        </Container>
    );
}