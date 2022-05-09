import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'

import './style.scss'

const Mission: FC = () => (
  <div className="mission-container">
    <Container>
      <div className="mission-container__content-wrapper">
        <h1 className="header">About us</h1>
        <Row>
          <p className="mission-container__content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eum tempora harum qui reiciendis minima, ipsam corporis doloremque ex inventore neque, labore tempore aperiam sint aliquam! Sapiente consectetur provident et?
          </p>
        </Row>
      </div>

      <div className="mission-container__content-wrapper">
        <h1 className="header">Our Vision</h1>
        <Row>
          <p className="mission-container__content">
            Our vision is to radiate sustainability across agricultural spaces in Rwanda.
          </p>
        </Row>
      </div>

      <div className="mission-container__content-wrapper">
        <h1 className="header">Our Mission</h1>
        <Row>
          <p className="mission-container__content">
            Our mission is to re-imagine the existing agricultural practices by  increasing the use of environmentally friendly alternatives across farms in Rwanda by 2030.
          </p>
        </Row>
      </div>

      {/* <div className="mission-container__content-wrapper">
        <h1 className="header">Our Objectives</h1>
        <Row>
          <p className="mission-container__content">
            To educate teenagers about sexual reproductive health, To support pregnant and parenting
            teens. To advocate for teenage mothers and their children to prevent future negative
            impact. To raise awareness on prevention of teenage pregnancies by building a positive
            Mindset.
          </p>
        </Row>
      </div> */}
    </Container>
  </div>
)

export default Mission
