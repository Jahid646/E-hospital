import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
    <div className="text-center mt-5 pt-5">
      <h2>Awesome <span className="text-info">Services</span> </h2>
      <p>Medicinal Service Company puts stock in conveying the most elevated quality administration with quality and sympathy every day.</p>
    </div>
    <Container>
      <Row xs={12} md={4} className="g-5 mt-2" >
        {services.map((service) => (
          <Service key={service.key} service={service}></Service>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Services;
