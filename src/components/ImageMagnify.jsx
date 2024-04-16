import ReactImageMagnify from 'react-image-magnify';


const ImageMagnify = () => {
  return (
    <div>
        <h3>Image Magnify</h3>
        <ReactImageMagnify {...{
            smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: 'img/watch-main.jpg',
            },
            largeImage: {
            src: 'img/watch-main-lg.jpg',
            width: 1200,
            height: 1800
            },
            enlargedImageContainerDimensions: {
            width: '200%',
            height: '100%'
            }
        }} />
    </div>
  )
}

export default ImageMagnify