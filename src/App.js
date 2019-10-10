import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container,Row,Col,Navbar,Nav,NavDropdown,Form,FormControl,Button,Carousel,Item,Caption,Card,Group,Label,Text,Control,Check } from 'react-bootstrap';
import AppRouter from "./about.js"

const Main = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wallpapercave.com/wp/wp2513176.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.royaldoors.net/wp-content/uploads/2017/08/3D-Nature-Images-Free-Download.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.kent.edu/sites/default/files/page/Water%20Green%20Nature%20Wallpaper.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

const Section = () => (
  <div className="main-section">
  <Container>
  <Row>
  <Col className="text-left"><h1>Lorem Ipsum</h1></Col>
  </Row>
  <Row>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.kent.edu/sites/default/files/page/Water%20Green%20Nature%20Wallpaper.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.kent.edu/sites/default/files/page/Water%20Green%20Nature%20Wallpaper.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.kent.edu/sites/default/files/page/Water%20Green%20Nature%20Wallpaper.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>
  </div>
)

const Contact = () => (
  <Container>
    <Row>
      <Col className="myform">
      <h1>Drop Us a Message</h1>
      <hr />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="formBasicCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Company" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write Message here..</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      </Col>
      <Col>
      <img
        className="d-block w-100"
        src="http://vaibhav-industries.com/images/contact-us.jpg"
        alt="First slide"
      />
      </Col>
    </Row>
  </Container>
)

const Footer = () => (
  <div className="myfooter">
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  </div>
)

function App() {
  return (
    <div className="App">

      <header className="App-header">

      <Navbar className="main-menu">
        <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">First Section</Nav.Link>
            <Nav.Link href="#link">Second Section</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </header>
      <Main />
      <Section />
      <Contact />
      <AppRouter/>
      <Footer />
    </div>
  );
}

export default App;
