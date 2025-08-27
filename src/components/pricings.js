import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default function AppPricings() {
  const pricingData = [
    {
      id: 1,
      plan: "Basic",
      price: "£49",
      features: [
        "Wireframing",
        "Visual Design",
        "5 pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.google.com",
    },
    {
      id: 2,
      plan: "Premium",
      price: "£149",
      features: [
        "Wireframing",
        "Visual Design",
        "15 pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      plan: "Ultimate",
      price: "£349",
      features: [
        "Wireframing",
        "Visual Design",
        "Unlimited pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.twitter.com",
    },
  ];
  return (
    <section id="pricing" className="block pricings-block">
      <Container fluid>
        <div className="title-holder">
          <h2>PRICING &amp; PLANS</h2>
          <div className="subtitle" style={{ marginBottom: "30px" }}>
            Our awesome offerings
          </div>
        </div>
        <Row>
          {pricingData.map((pricing, index) => {
            return (
              <Col sm={4} key={pricing.id}>
                <div
                  className={`pricing-card ${index === 1 ? "featured" : ""}`}
                >
                  <div className="heading">
                    <h3>{pricing.plan}</h3>
                    <span className="price">{pricing.price}</span>
                  </div>
                  <div className="content">
                    <ListGroup>
                      {pricing.features.map((feature, i) => (
                        <ListGroup.Item key={i}>{feature}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                  <div className="btn-holder">
                    <a href={pricing.link} className="btn btn-primary">
                      order now
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
