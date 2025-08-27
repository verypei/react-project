import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import img1 from "../assets/images/img1.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function AppAbout() {
  const html = 90;
  const responsive = 75;
  const photoshop = 44;
  return (
    <section id="about" className="about about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>ABOUT US</h2>
          <div className="subtitle">Learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} variant="success" />
            </div>
            <div className="progress-block">
              <h4>RESPONSIVE</h4>
              <ProgressBar
                now={responsive}
                label={`${responsive}%`}
                variant="info"
              />
            </div>
            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar
                now={photoshop}
                label={`${photoshop}%`}
                variant="warning"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
