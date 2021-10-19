import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container className="border mt-5 pt-5 pb-5 mb-5">
        <Row>
          <Col className="text-center mt-5 pt-5">
            <div>
              <img
                className=""
                height="500"
                src="https://i.ibb.co/t2jM1mb/about1.png"
                alt=""
              />
            </div>
          </Col>
          <Col className=" mt-5 pt-5">
            <div>
              <div className="text-center mt-5 pt-5">
                <h2>
                  About Our <span className="text-info">E-health Hospital</span>
                </h2>
              </div>
              <p>
                we additionally paintings very closely with our community
                healthcare group who provide antenatal, postnatal and nursing
                services and different specialist provision inclusive of the
                quitters scheme. <br />
                This 24 month benefit covers all ranges of basic upkeep.
                Notwithstanding every one of the things included on the Full
                administration we cover things that are frequently suggested for
                substitution like clockwork. <br />
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="border mt-5 pb-5 mb-5">
        <Row>
         
          <Col className=" mt-5">
            <div>
            <div className="text-center">
              <h2>
                Why we are <span className="text-info">Special</span>
              </h2>
            </div>
              <p>
              E-health Hospital has gladly served this County and the encompassing 27 city of the Permian Basin for more than 55 years. We've made some amazing progress since we opened our entryways in 1955 developing from a little region healing center into a prosperous 750 bed provincial medicinal focus serving more than 123,000 patients yearly. While we've seen many changes throughout the years, <br/> a few things have stayed unaltered. We are as yet the main full-benefit healing facility in the district, regardless we endeavor to convey the most ideal administer to the general population of the Permian Basin. <br />
              </p>
            </div>
         
          </Col>

          <Col className="text-center pt-5">
            <div>
            <iframe width="636" height="265" src="https://www.youtube.com/embed/8LZJz7GtJA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
