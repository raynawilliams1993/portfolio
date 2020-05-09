import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import Hero from "../hero/hero";
import pic1 from "../assets/fitness.png";
import pic2 from "../assets/EmployeeDir.png";
import pic3 from "../assets/burger.png";
import pic4 from "../assets/Project1.png";
import pic5 from "../assets/budgetTracker.png";
import pic6 from "../assets/ballin.png";

const Example = (props) => {
  return (
    <div>


      <Hero backgroundImage="https://images.wallpaperscraft.com/image/scifi_chip_structure_139654_1280x720.jpg">

      </Hero>
      <Card>
        <h1> Technical Skills </h1>
        <p>
          JavaScript, MERN, MySql, NoSql, HTML, CSS, GitHub, Git, Es6, Handlebars, API, AJAX, AWS and Node.Js.

        </p>
      </Card>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={pic1} alt="Fitness App" />
          <CardBody>
            <CardTitle>Fitness Tracker</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button href="https://github.com/raynawilliams1993/fitnessTracker">GitHub</Button>
            <Button href="https://agile-sands-15513.herokuapp.com/exercise?id=5e4b0f904df7e300171b940d">View App</Button>
          </CardBody>
        </Card>
     
        <Card>
          <CardImg top width="100%" src={pic3} alt="Burger Handlebars App" />
          <CardBody>
            <CardTitle>Burger!</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button href=" https://github.com/raynawilliams1993/burger">GitHub</Button>
            <Button href="https://eatingburgers2424.herokuapp.com/">View App</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={pic4} alt="Project 01-3rdpartyAPIs" />
          <CardBody>
            <CardTitle>Project 1: Bored in Denver?</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button href="https://github.com/7thact/Project01">GitHub</Button>
            <Button href=" https://7thact.github.io/Project01/">View App</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={pic5} alt="Budget Tracker App" />
          <CardBody>
            <CardTitle>Progressive Budget Tracker</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button href=" https://boiling-escarpment-16918.herokuapp.com/">GitHub</Button>
            <Button href=" https://github.com/raynawilliams1993/budgetTracker">View App</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={pic6} alt="Final Project-MERNSTACK" />
          <CardBody>
            <CardTitle>Project 3: Fantasy Basketball</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button href="https://github.com/raynawilliams1993/ballerz">GitHub</Button>
            <Button href=" https://ballerz24.herokuapp.com/">View App</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Example;