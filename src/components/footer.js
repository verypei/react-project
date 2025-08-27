import Container from "react-bootstrap/Container";
export default function AppFooter() {
  return (
    <Container fluid>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        &copy; All Right Reserved; 2025
      </div>
      <div
        className="socials"
        style={{ marginLeft: "-15px", marginBottom: "35px" }}
      >
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
