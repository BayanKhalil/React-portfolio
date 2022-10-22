import { Col } from "react-bootstrap";
import projImg7 from "../assets/img/link (1).png";
export const ProjectCard = ({ title, description, imgUrl, link }) => {

  const brakechain=()=> {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf0c1;";
    setTimeout(function () {
        a.innerHTML = "&#xf127;";
      }, 1000);
  }
  // brakechain();
  // setInterval(brakechain, 2000);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
         
        </div>
        
      </div>
      <div>
          <a  href={link} target="_blank" rel="noreferrer"><img  class="link" src={projImg7} alt="" /></a>
        </div>
    </Col>
  )
}
