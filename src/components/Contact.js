import React from "react";
import ContactStyle from "./ContactStyle.css";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Contact() {
  return (
    <div
    className="home-container"
    style={{ width: window.innerWidth, height: window.innerHeight }}
  >
    <div>
      <Form className="form-contact">
        {/* <Row className="mb-3"> */}
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label style={{ color: "white" }}>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            style={{ width: "300px" }}
          />
        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label style={{ color: "white" }}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ width: "300px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label style={{ color: "white" }}>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Message"
            style={{ width: "300px" }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "150px" }}>
          Send Message
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default Contact;
