
import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Navigate = (props) => {
    return (
<div>
<p>Link based</p>
<Nav vertical>
  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
</Nav>
</div>
    )
}

export default Navigate;
