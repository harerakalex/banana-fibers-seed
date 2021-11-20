import React, { FC } from 'react'

import './style.scss'

type Props = {
  image: string
  title: string
}
const ImageContainer: FC<Props> = props => {
  const { image, title } = props
  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="image-container__content">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default ImageContainer
