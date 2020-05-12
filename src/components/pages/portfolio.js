import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Row, Col
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
          JavaScript, MERN, MySql, NoSql, HTML, CSS, GitHub, Git, JSON, Es6, Handlebars, MVP, OOP, Sequelize, ORM, React, ReactStrap, BootStrap, Sass API, AJAX, AWS and Node.Js.

        </p>
        <h2> Interpersonal Skills</h2>
        <p>
          Communication, Conflict Resolution, Problem-Solving, Compassion, Patience, Diversity, Management, Active Listening, Networking, Social Skills and Collaboration.
        </p>
      </Card>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={pic1} alt="Fitness App" />
          <CardBody>
            <CardTitle>Fitness Tracker</CardTitle>
            <CardSubtitle>NoSQL,
            MongoDB,
            Object-document mapping,
            Mongoose.js,
             CRUD</CardSubtitle>
            <CardText>A daily fitness log that is able to track the name, type, weight, sets, reps, and duration of the specific exercise.</CardText>
            <Button href="https://github.com/raynawilliams1993/fitnessTracker">GitHub</Button>
            <Button href="https://agile-sands-15513.herokuapp.com/exercise?id=5e4b0f904df7e300171b940d">View App</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" src={pic3} alt="Burger Handlebars App" />
          <CardBody>
            <CardTitle>Burger!</CardTitle>
            <CardSubtitle>Sequelize,
            sequelize-cli,
            CRUD,
            Models,
            Validations,
            Associations</CardSubtitle>
            <CardText>a burger log in app with MySQL, Node, Express, Handlebars and ORMS.</CardText>
            <Button href=" https://github.com/raynawilliams1993/burger">GitHub</Button>
            <Button href="https://eatingburgers2424.herokuapp.com/">View App</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={pic4} alt="Project 01-3rdpartyAPIs" />
          <CardBody>
            <CardTitle>Project 1: Bored in Denver?</CardTitle>
            <CardSubtitle>Server-side API and MVP </CardSubtitle>
            <CardText>Using a Ticketmaster API pulls information about certain events. Ajax calls data for a specified date. The Google API used the Routes API, from the Google Maps Platform.</CardText>
            <Button href="https://github.com/7thact/Project01">GitHub</Button>
            <Button href=" https://7thact.github.io/Project01/">View App</Button>
          </CardBody>
        </Card>
        <Row>
          <Col xs="6" sm="4">

          </Col>

          <Card>
            <CardImg top width="100%" src={pic5} alt="Budget Tracker App" />
            <CardBody>
              <CardTitle>Progressive Budget Tracker</CardTitle>
              <CardSubtitle> IndexedDB, cache API, and Service Workers</CardSubtitle>
              <CardText>A Budget Tracking app that allows the user to update and view the current budget using Node, Express, and NPM packages such as webpack and compression.</CardText>
              <Button href=" https://boiling-escarpment-16918.herokuapp.com/">GitHub</Button>
              <Button href=" https://github.com/raynawilliams1993/budgetTracker">View App</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={pic6} alt="Final Project-MERNSTACK" />
            <CardBody>
              <CardTitle>Project 3: Fantasy Basketball</CardTitle>
              <CardSubtitle>MERN STACK, React Auth, Plotly JS</CardSubtitle>
              <CardText>This application was designed for NBA fans to access certain stats for a specific player. Authentication was implemented so that users can sign up and login in to see NBA player's stats.</CardText>
              <Button href="https://github.com/raynawilliams1993/ballerz">GitHub</Button>
              <Button href=" https://ballerz24.herokuapp.com/">View App</Button>
            </CardBody>
          </Card>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Example;