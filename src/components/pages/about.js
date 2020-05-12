import React from "react";
import Hero from "../hero/hero";
import Container from "../container/container";
import Row from "../row/row";
import Col from "../col/col";
import { Nav } from "reactstrap";

function About() {
  return (
    <div>
      <Nav />
      <Hero backgroundImage="https://images.wallpaperscraft.com/image/silhouette_night_starry_sky_151193_1280x720.jpg">
        <h1>Rayna K. Williams</h1>
        <h2> Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30, marginBottom: 60 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
            <p>
              Aspiring user focused back end Web Developer with a strong background in management, art and communication skills with the ability to problem solve across various work environments. Strong understanding of what end-users need, and how they interact with products, websites, and platforms. Passionate about finding creative solutions and collaborating with others to create elegant, meaningful content and products with impeccable attention to detail. Earned a certificate in Full Stack Web Development from the University of Denver.
        </p>
            <p>
              My name is Rayna Williams, I am twenty-seven years old and have lived in Colorado my entire life. I am very creative, passionate and strive to live my life to the fullest. I enjoy the great outdoors, especially golf because not only am I good at it, but I know that I am also challenging myself physically and mentally as well when playing. Growing up in Denver I have developed and matured, expanding my knowledge just as the city continues to expand its limits. I enjoy the music scene and culture this city has to offer. To sum it up, I am extremely excited to enter Denver's ever-expanding tech world!
            </p>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;