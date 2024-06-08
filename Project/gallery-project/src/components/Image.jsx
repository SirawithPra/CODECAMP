import React from 'react'

function Image({ className, image, alt, objectCover, as, ...rest }) {
  return (
    <div className={className} {...rest}>
        <img src={image} alt={alt} className={`w-full h-full ${objectCover}`} />
    </div>
)
}

export default Image
