import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css'
const Service = (props) => {
  const { key, name, price, description, img } = props.service;
  return (
    <Col xl={3} lg={4} md={5} sm={6}>
      <Card id="cardStyle"  className="h-100 mx-auto border-info border">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}><small>{description}</small></Card.Text>
          <h3 className="text-dark fw-bold">$ {price}</h3>
        </Card.Body>
        <div className="mx-auto pb-2">
          <Link to={`/food/${key}`}>
            <Button variant="outline-info">Get Service</Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Service;
