'use client'

import Image from 'next/image'
import { ImageProps } from 'next/image'

const ImageWithError = (props: ImageProps) => {
  return (
    <Image
      {...props}
      onError={(e) => {
        console.error('Image load error:', e)
      }}
    />
  )
}

export default ImageWithError 