import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.png";
import projImg2 from "../assets/img/p2.png";
import projImg3 from "../assets/img/p3.png";
import projImg4 from "../assets/img/p4.png";
import projImg5 from "../assets/img/p5.jpg";
import projImg6 from "../assets/img/p6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Game Engine",
      description: "Build this game engine out of interest in summer.",
      imgUrl: projImg1,
    },
    {
      title: "Carpool App",
      description: "This app was made for hackathon in Synergy. Which we won!",
      imgUrl: projImg2,
    },
    {
      title: "Hilden",
      description: "For IIITB SOC I worked on a compiler for a language called Hilden",
      imgUrl: projImg3,
    },
    {
      title: "Warranty Management System for Flipkart",
      description: "Made a warranty management system on blockchain for Flipkart grid hackathon.",
      imgUrl: projImg4,
    },
    {
      title: "AnkiDroid",
      description: "Worked on AnkiDroid for some time while working on open source projects",
      imgUrl: projImg5,
    },
    {
      title: "Vim like Editor in Rust",
      description: "Made a vim Like Editor in Rust!",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}