import React from 'react'
import PropTypes from 'prop-types'
import AvatarStyled from './styled'

const DEFAULT_IMAGE = 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX60_.png'

const Avatar = ({ image = DEFAULT_IMAGE }) => (
  <AvatarStyled>
    <img src={image} width='50' height='50' />
  </AvatarStyled>
)

Avatar.propTypes = {
  image: PropTypes.string
}

export default Avatar
