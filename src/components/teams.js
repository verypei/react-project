import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function AppTeams() {
  const teamsData = [
    {
      id: 1,
      image: require("../assets/images/team1.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Gabriel Hart",
      designation: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 2,
      image: require("../assets/images/team2.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "David Antony",
      designation: "Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 3,
      image: require("../assets/images/team3.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Nicholas Perry",
      designation: "UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 4,
      image: require("../assets/images/team4.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Sarah Wills",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 5,
      image: require("../assets/images/team5.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Sophia Pitt",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 6,
      image: require("../assets/images/team6.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Taylor Lopez",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 7,
      image: require("../assets/images/team7.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Ryan Giggs",
      designation: "Content Writer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 8,
      image: require("../assets/images/team8.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "David Smith",
      designation: "SEO Expert",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
  ];
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>OUR TEAMS</h2>
          <div className="subtitle" style={{ marginBottom: "30px" }}>
            Our awesome teams
          </div>
          <Row>
            {teamsData.map((team) => {
              return (
                <Col sm={3} key={team.id}>
                  <div className="image">
                    <Image src={team.image} alt="image" />
                    <div className="overlay">
                      <div className="socials">
                        <ul>
                          <li>
                            <a href={team.fbLink}>
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href={team.twitterLink}>
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href={team.linkedinLink}>
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{team.name}</h3>
                    <span className="designation">{team.designation}</span>
                    <p>{team.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
}
