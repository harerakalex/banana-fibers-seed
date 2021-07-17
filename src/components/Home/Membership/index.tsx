import React, { FC } from 'react'

import './style.scss'
import backgroundImage from '../../../images/1.jpg'

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
        <h2>We are here for them</h2>
        <p className="small mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />
          Veritatis accusantium blanditiis aspernatur! Autem similique,
        </p>
        <a href="/membership" className="px-4 py-3 my-4 rounded membership-container__button">
          Join Us
        </a>
      </div>
    </div>
  )
}

export default Membership
