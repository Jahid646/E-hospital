import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Specialist = (props) => {
    const { name, category, img } = props.specialist;
    return (
        <Col xl={3} lg={4} md={5} sm={6}>
      <Card id="cardStyle" style={{ width: "18rem" }} className="h-100 mx-auto border-info border">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <small className="">-{category}</small>
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default Specialist;