import React, { FC } from 'react'
import { Link } from 'gatsby'

import './style.scss'
import backgroundImage from '../../../images/team1.jpg'

const Membership: FC = () => {
  return (
    <div
      className="membership-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="membership-container__content rounded px-3 py-5">
        <h2>What is Lorem Ipsum?</h2>
        <p className="small mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit,
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link to="/membership" className="px-4 py-3 my-4 rounded membership-container__button">
          Join Us
        </Link>
      </div>
    </div>
  )
}

export default Membership
