import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Image from "react-bootstrap/Image";
import { useState } from "react";

export default function AppWorks() {
  const worksData = [
    {
      id: 1,
      link: "https://www.google.com",
      image: require("../assets/images/img2.jpg"),
      title: "Lonely Path",
      subtitle: "Web Design",
    },
    {
      id: 2,
      link: "https://www.google.com",
      image: require("../assets/images/img3.jpg"),
      title: "Photographer Girl",
      subtitle: "Branding",
    },
    {
      id: 3,
      link: "https://www.google.com",
      image: require("../assets/images/img4.jpg"),
      title: "The Difference",
      subtitle: "Web Design",
    },
    {
      id: 4,
      link: "https://www.google.com",
      image: require("../assets/images/img5.jpg"),
      title: "Nature Patterns",
      subtitle: "Branding",
    },
    {
      id: 5,
      link: "https://www.google.com",
      image: require("../assets/images/img6.jpg"),
      title: "The Difference",
      subtitle: "Photography",
    },
    {
      id: 6,
      link: "https://www.google.com",
      image: require("../assets/images/img7.jpg"),
      title: "Winter Sonata",
      subtitle: "Web Design",
    },
    {
      id: 7,
      link: "https://www.google.com",
      image: require("../assets/images/img8.jpg"),
      title: "Lonely Path",
      subtitle: "Branding",
    },
    {
      id: 8,
      link: "https://www.google.com",
      image: require("../assets/images/img9.jpg"),
      title: "Appreciation",
      subtitle: "Photography",
    },
    {
      id: 9,
      link: "https://www.google.com",
      image: require("../assets/images/img2.jpg"),
      title: "Happy Days",
      subtitle: "Web Design",
    },
  ];
  // ----------------------- PAGINATION -----------------------

  // let active = 1;
  const [activePage, setActivePage] = useState(1);
  let items = [];
  for (let number = 1; number <= worksData.length; number++) {
    items.push(
      <Pagination.Item key={number} active={activePage === number}>
        {number}
      </Pagination.Item>
    );
  }

  function handlePaginationClick(e) {
    return setActivePage(Number(e.target.text));
  }

  return (
    <section id="works" className="blocks works-blocks">
      <Container fluid>
        <div className="title-holder"></div>
        <h2>OUR WORKS</h2>
        <div className="subtitle">Our awesome works</div>
        <Row className="portfoliolist">
          {worksData.map((work) => {
            return (
              <Col sm={4} key={work.id}>
                <div className="portfolio-wrapper">
                  <a href={work.link}>
                    <Image src={work.image} />
                    <div className="label text-center">
                      <h5>{work.title}</h5>
                      <p>{work.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination
          className="pagination justify-content-center"
          onClick={handlePaginationClick}
        >
          {items}
        </Pagination>
      </Container>
    </section>
  );
}
