import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/JAVA-TODO.jpg";
import projImg2 from "../assets/img/filtering-job.png";
import projImg3 from "../assets/img/react-todolist.jpg";
import projImg4 from "../assets/img/coffee-webage.jpg";
import projImg5 from "../assets/img/aurora.png";
import projImg6 from "../assets/img/wtm-sample-api.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ToDo Bot",
      description: "Full-Stack Java Application using springboot,Thymeleaf, CSS,POSTGRESQL",
      imgUrl: projImg1,
      link:"https://todo-app-bots.herokuapp.com/"
    },
    {
      title: "Filtering-Job-Listings",
      description: "Front-End Application using REACT,Styled-Components",
      imgUrl: projImg2,
      link:"https://63528caad6b486128f8676d7--fascinating-licorice-2ac8e5.netlify.app/"
    },
    {
      title: "TASKIFY Drag and Drop Todo List",
      description: "Full-Stack Application using REACT,Typescript,CSS,Node.js,Express.js,MongoDB",
      imgUrl: projImg3,
      link:""
    },
    {
      title: "Coffee-Shop-Webpage",
      description: "Responsive-Coffee-Shop-Website using HTML,CSS,Javascript",
      imgUrl: projImg4,
      link:"https://63519f4476323600aaa5bdb4--helpful-blini-71752c.netlify.app/"
    },
    {
      title: "aurora",
      description: "Full-Stack Application using Javascript,CSS,HTML,Node.js,Express.js,postgreSQL",
      imgUrl: projImg5,
      link:""
    },
    {
      title: "Weather API",
      description: "Back-end Application using nestJS,passport,jwt,API",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
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
