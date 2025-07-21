import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => {
  if (!rest.src) {
    return null
  }
  return <NextImage {...rest} />
}

export default Image
