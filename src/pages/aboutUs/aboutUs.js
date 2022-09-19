import React from "react";
import "./aboutUs.css";
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from "@coreui/react";
import batata from "../../Assets/Images/batata.jpg";
import batata2 from "../../Assets/Images/batata2.jpg";

const AboutUs = () => {
  return (
    <div id="about">
      <div className="banner">
        <h1>About Us</h1>
      </div>
      <div className="body">
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
          <CCol xs className="lCard">
            <CCard>
              <CCardImage orientation="top" src={batata} />
              <CCardBody>
                <CCardTitle className="cardTitle">Our Honey</CCardTitle>
                <CCardText className="cardInfo">
                  1- Better for blood sugar more than regular sugar.
                  <br />
                  2- Improves heart health.
                  <br />
                  3- Promotes burn and wound healing.
                  <br />
                  4- Easy to add to your diet.
                  <br />
                  5-May help suppress coughing in children.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  <a
                    className="backLink"
                    href="https://en.wikipedia.org/wiki/Honey"
                  >
                    Honey Benefits...
                  </a>
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
          <CCol xs className="rCard">
            <CCard>
              <CCardImage orientation="top" src={batata2} />
              <CCardBody>
                <CCardTitle className="cardTitle">Our Bees</CCardTitle>
                <CCardText className="cardInfo">
                  1- Clean & polish the cells. <br />
                  2- Feed the brood.
                  <br />
                  3- Care for the queen.
                  <br />
                  4- Remove debris.
                  <br />
                  5- Handle incoming nectar.
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <small className="text-medium-emphasis">
                  <a
                    className="backLink"
                    href="https://en.wikipedia.org/wiki/Bee#:~:text=Solitary%20bees%20are%20important%20pollinators,carrying%20structures%20on%20their%20bodies.
                "
                  >
                    Bees Benefits...
                  </a>
                </small>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </div>
  );
};

export default AboutUs;
