import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Specialist from '../Specialist/Specialist';

const Specialists = () => {
    
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
      fetch("specialists.json")
        .then((res) => res.json())
        .then((data) => setSpecialists(data));
    }, []);
    return (
        <>
    <div className="text-center mt-5 pt-5">
      <h2>Our <span className="text-info">Specialists</span> </h2>
      <p>Medicinal Service Company puts stock in conveying the most elevated quality administration with quality and sympathy every day.</p>
    </div>
    <Container>
      <Row xs={12} md={4} className="g-5 mt-2" >
        {specialists.map((specialist) => (
          <Specialist key={specialist.key} specialist={specialist}></Specialist>
        ))}
      </Row>
    </Container>
    </>
    );
};

export default Specialists;