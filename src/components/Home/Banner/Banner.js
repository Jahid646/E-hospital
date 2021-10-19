import React from "react";
import { Carousel, Container} from "react-bootstrap";
import './Banner.css'
const Banner = () => {
  return (
    <>

    
<Container fluid>
  <Carousel variant="">
              <Carousel.Item>
                <img
                
                  className="d-block w-100 img-fluid image"
                  
                  src="https://www.state.gov/wp-content/uploads/2019/04/shutterstock_683522173-2560x852.jpg"
                  alt="First slide"
                />
                <Carousel.Caption  className="bg">
                  <h2>
                    Wellcome to E-health{" "}
                    <span className="text-info"> Hospital</span>
                  </h2>
                  <p>
                    Medical Services provides routine and urgent medical care,
                    travel medicine,
                    <br /> sexual health services, gynecological and
                    confidential HIV testing{" "}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                
                  className="d-block w-100 img-fluid image"
                 
                  src="https://www.retinawv.com/wp-content/uploads/2017/06/resources.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption  className="bg"> 
                  <h2>
                    Your Satisfaction Our{" "}
                    <span className="text-info">Goal</span>
                  </h2>
                  <p>
                    Medical Services provides routine and urgent medical care,
                    travel medicine, <br /> sexual health services,
                    gynecological and confidential HIV testing{" "}
                  </p>
                </Carousel.Caption >
              </Carousel.Item>
              <Carousel.Item>
                <img
                
                  className="d-block w-100 img-fluid image"
                  
                  src="https://www.completecaresolutionsllc.com/static/sitefiles/pages/InnerBanner-WhoWeAre1.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg">
                  <h2>
                    Best Service From <span className="text-info">Us</span>
                  </h2>
                  <p>
                    Medical Services provides routine and urgent medical care,
                    travel medicine,
                    <br /> sexual health services, gynecological and
                    confidential HIV testing{" "}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
</Container>
      
            
   
  
    </>
  );
};

export default Banner;
