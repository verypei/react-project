import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <div className="title-holder">
        <h2>CONTACT</h2>
        <div className="subtitle">Our location</div>
      </div>
      <Container fluid>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                placeholder="Enter your full name"
                type="text"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                placeholder="Enter your email"
                type="email"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                placeholder="Enter your contact number"
                type="tel"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Description"
                type="text"
                style={{
                  height: "200px",
                }}
                required
              />
            </Col>
          </Row>
          <div
            className="btn btn-holder"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
      {/* ------------------google map----------------------- */}
      <div className="google-map">
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2809312557115!2d106.79901537458962!3d-6.226642760980228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14f3c69fe0d%3A0x1fa8acd75c6678b!2sRatu%20Plaza!5e0!3m2!1sid!2sid!4v1756284437141!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container>
        <div className="contact-info">
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Ratu Plaza
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +85283266184
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              xxx@gmail.com
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
