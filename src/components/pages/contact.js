import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Container, Row, Col } from 'reactstrap';
import Hero from "../hero/hero";



const Contact = (props) => {
  return (
    <div>

      <Hero backgroundImage="https://images.wallpaperscraft.com/image/phone_booth_black_white_city_11178_1280x720.jpg">

      </Hero>


      <Container className="themed-container" fluid={true}>
     
        <ListGroup>
          <ListGroupItem active>
            <ListGroupItemHeading>Email</ListGroupItemHeading>
            <ListGroupItemText>
              Raynawilliams123@gmail.com
        </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem active>
            <ListGroupItemHeading>Phone</ListGroupItemHeading>
            <ListGroupItemText>
              (720)-681-3392
        </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem active>
            <ListGroupItemHeading>LinkedIn Profile</ListGroupItemHeading>

            <ListGroupItem tag="a" href=" https://www.linkedin.com/in/rayna-williams-225965191/">Check it Out!</ListGroupItem>










          </ListGroupItem>
        </ListGroup>
      </Container>
      
    </div>
  );
}

export default Contact;