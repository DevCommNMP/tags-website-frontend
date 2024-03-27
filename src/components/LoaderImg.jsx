import loaderImg from '../assets/imgs/loader/loader.gif'
const LoaderImg = () => {
  return (
    <>
    <div className="loaderContainer" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={loaderImg} className="img-fluid" alt="loader" />
    </div>
    </>
  )
}

export default LoaderImg