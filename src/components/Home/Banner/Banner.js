import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
          <Container>
              <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
      <h2>Wellcome to E-health <span className="text-info"> Hospital</span></h2>
      <p>Medical Services provides routine and urgent medical care, travel medicine,<br/> sexual health services, gynecological and confidential HIV testing  </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/4p0bRc9/young-female-surgeon-with-medical-team-back-before-surgery.jpg"
      alt="Second slide"
    />
    <Carousel.Caption >
    <h2>Your Satisfaction Our <span className="text-info">Goal</span></h2>
      <p>Medical Services provides routine and urgent medical care, travel medicine, <br/> sexual health services, gynecological and confidential HIV testing </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/QnzxSKt/young-male-psysician-with-patient-measuring-blood-pressure-1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h2>Best Service From <span className="text-info">Us</span></h2>
      <p>Medical Services provides routine and urgent medical care, travel medicine,<br/> sexual health services, gynecological and confidential HIV testing  </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
                

           
        </div>
    );
};

export default Banner;