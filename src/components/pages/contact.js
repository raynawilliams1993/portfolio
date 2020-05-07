import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, PaginationLink } from 'reactstrap';

const Contact = (props) => {
  return (
    <ListGroup>
      <ListGroupItem active>
        <ListGroupItemHeading>Email</ListGroupItemHeading>
        <ListGroupItemText>
          Raynawilliams123@gmail.com
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Phone</ListGroupItemHeading>
        <ListGroupItemText>
          (720)-681-3392
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>LinkedIn Profile</ListGroupItemHeading>

        <ListGroupItem tag="a" href=" https://www.linkedin.com/in/rayna-williams-225965191/">Check it Out!</ListGroupItem>
    
    







      </ListGroupItem>
    </ListGroup>
  );
}

export default Contact;