
import React from './node_modules/react';
import { Nav, NavLink } from './node_modules/reactstrap';

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
