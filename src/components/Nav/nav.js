
import React from 'react';
import { Nav, NavLink, Button, ButtonGroup } from 'reactstrap';



const Navigate = (props) => {
    return (
<div>

<Nav vertical>

<ButtonGroup size="md">
  <Button>
  <NavLink href="/about">About</NavLink> <NavLink href="/contact">contact</NavLink> <NavLink href="/portfolio">Portfolio</NavLink> 

  </Button>
 
</ButtonGroup>
</Nav>
</div>
    )
}

export default Navigate;
