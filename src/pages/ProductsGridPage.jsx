/* eslint-disable react/jsx-key */
import premiumLeather from "../assets/imgs/banner/PremiumleatherBanner.jpg";
import casualImg from "../assets/imgs/banner/casual.jpeg";
import formalImg from "../assets/imgs/banner/Formal-footwear.jpg";
import partyImg from "../assets/imgs/banner/Party-Footwear.jpg";
import ethinicImg from  "../assets/imgs/banner/ethnic.jpeg"
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Header from "../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchAllProductsAction } from "../redux/actions/product/productActions.js";
import { useSelector } from "react-redux";
import { Pagination, DropdownButton, Dropdown } from "react-bootstrap";
import ProductCard from "../components/ProductCard.jsx";
import { ToastContainer } from "react-toastify";
import LoaderImg from "../components/LoaderImg.jsx";

const ProductsGridPage = () => {
  // console.log(data)
  const { title } = useParams();
  const{color}=useParams();
  // const{subtypes}=useParams();
  const [Loading,setloading]=useState(false);
  const [updatedData,setupdatedData]=useState([]);
  const [data,setData]=useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice,setminPrice]=useState(1000);
  const [maxPrice,setmaxPrice]=useState(10000)
  const{subtypes}=useParams();
// console.log(subtypes)
  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;
  const [sliderValues, setSliderValues] = useState([0, 100]);
  const [productsPerPage, setProductsPerPage] = useState(5);

  const filteredDataByCategories = async (title) => {
    setloading(true);
    const filtereddata = products.filter((product) => product.subcategory.subcategoriesName === title);
    setupdatedData(filtereddata);
    setloading(false);
  };
  const filteredDataBySubtype = async (subtypes) => {
    setloading(true);
    const filtereddata = products.filter((product) => product.subcategoryType.subcategoryTypeName === subtypes);
    setupdatedData(filtereddata);
    setloading(false);
console.log()

  };const filteredDataByColor = async (color) => {
    try {
      setloading(true);
      const filteredData = products.filter((product) => product.colorsAvailable.includes(color));
      // console.log(products.filter((product) => product.colorsAvailable.includes('color'))) // Logging filtered data for debugging
      await setupdatedData(filteredData); // Assuming setupdatedData is an async function
    } catch (error) {
      // Handle any errors here
      console.error("Error filtering data:", error);
    } finally {
      setloading(false);
      console.log(color);
    }
  };
  
  

  const filteredDataByFilters = async (color, minPrice, maxPrice) => {
    setloading(true);
    const filteredData = products.filter((product) => {
      // Check if the product matches the specified color
      const colorMatch = !color || product.colorsAvailable.includes(color);
      
      // Check if the product's price falls within the specified range
      const priceMatch = (!minPrice || product.SellingPrice >= minPrice) && (!maxPrice || product.SellingPrice <= maxPrice);
      
      return colorMatch && priceMatch;
    });
  
    setupdatedData(filteredData);
    setloading(false);
  };
  
  // console.log(products)
  console.log(updatedData)
  // console.log(products.filter((product) => product.subcategory.subcategoriesName === 'Ethinic Footwear'))
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllProductsAction()).then(() => {
      if (title) {
        filteredDataByCategories(title);
      }
if(subtypes){
  filteredDataBySubtype(subtypes)
}
      if(color ){
        filteredDataByColor(color)
      }
    });
  }, [dispatch, title,color,subtypes]);
  
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page

  // Function to handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle dropdown selection
  const handlePerPageChange = (value) => {
    setProductsPerPage(value);
    setCurrentPage(1); // Reset current page to 1 when changing products per page
  };

  // Calculate index of first and last product for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Slice products based on pagination
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle slider change
  const handleSliderChange = (values) => {
    setSliderValues(values);
    setminPrice(sliderValues[0])
    setmaxPrice(sliderValues[1])
    // console.log(sliderValues)
  };

  const handleSliderClick = (e) => {
    // Ensure that sliderValues is an array
    if (!Array.isArray(sliderValues)) return;

    // Calculate the clicked position relative to the slider track
    const trackRect = e.target.getBoundingClientRect();
    const clickedPosition = e.clientX - trackRect.left;
    const sliderWidth = trackRect.width;

    // Calculate the corresponding value based on the clicked position
    const valueClicked = (clickedPosition / sliderWidth) * 100;

    // Update the slider values
    const newValue = [Math.round(valueClicked), sliderValues[1]];
    setSliderValues(newValue);



  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    // If checked, add the color to selectedColors array
    // If unchecked, remove the color from selectedColors array
    if (checked) {
      setSelectedColors((prevSelectedColors) => [...prevSelectedColors, value]);
    } else {
      setSelectedColors((prevSelectedColors) => prevSelectedColors.filter((color) => color !== value));
    }

    console.log(selectedColors)
  };
  const colors = [
    "Gold",
    "Peach",
    "Pink",
    "Black",
    "White",
    "Chic",
    "Navy Blue",
    "Rust",
    "Olive Green",
    "Brown",
    // Add more colors as needed
  ];
  return (
    <>
          <ToastContainer />
      <div>
        <div
          className="modal fade custom-modal"
          id="quickViewModal"
          tabIndex="-1"
          aria-labelledby="quickViewModalLabel"
          aria-hidden="true"
        ></div>
        <Header />
       {(Loading || productsLoading)?<LoaderImg />: <main className="main">
        <div className="page-header mt-30 mb-50">
  <div className="container">
    {title === "Premium Leather" && (
      <div className="archive-header category_bg" style={{ backgroundImage: `url(${premiumLeather})`, height: 300 }}>
        <div className="row align-items-center">
          <div className="col-xl-3">
            {title ? <h1 className="mb-15">{title}</h1> : ""}
            {color ? <h1 className="mb-15">{color}</h1> : ""}
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop <span></span> {title || color ||subtypes}
            </div>
          </div>
        </div>
      </div>
    )}
    {title === "Ethinic Footwear" && (
      <div className="archive-header category_bg" style={{ backgroundImage: `url(${ethinicImg})`, height: 300 }}>
        <div className="row align-items-center">
          <div className="col-xl-3">
            {title ? <h1 className="mb-15">{title}</h1> : ""}
            {color ? <h1 className="mb-15">{color}</h1> : ""}
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop <span></span> {title || color ||subtypes}
            </div>
          </div>
        </div>
      </div>
    )}
    {title === "Formal Footwear" && (
      <div className="archive-header category_bg" style={{ backgroundImage: `url(${formalImg})`, height: 300 }}>
        <div className="row align-items-center">
          <div className="col-xl-3">
            {title ? <h1 className="mb-15">{title}</h1> : ""}
            {color ? <h1 className="mb-15">{color}</h1> : ""}
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop <span></span> {title || color ||subtypes}
            </div>
          </div>
        </div>
      </div>
    )}
    {title === "Party Footwear" && (
      <div className="archive-header category_bg" style={{ backgroundImage: `url(${partyImg})`, height: 300 }}>
        <div className="row align-items-center">
          <div className="col-xl-3">
            {title ? <h1 className="mb-15">{title}</h1> : ""}
            {color ? <h1 className="mb-15">{color}</h1> : ""}
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop <span></span> {title || color ||subtypes}
            </div>
          </div>
        </div>
      </div>
    )}
     {title === "Casual Footwear" && (
      <div className="archive-header category_bg" style={{ backgroundImage: `url(${casualImg})`, height: 300 }}>
        <div className="row align-items-center">
          <div className="col-xl-3">
            {title ? <h1 className="mb-15">{title}</h1> : ""}
            {color ? <h1 className="mb-15">{color}</h1> : ""}
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop <span></span> {title || color ||subtypes}
            </div>
          </div>
        </div>
      </div>
    )}
    {title === "Sports Footwear" && (
      <div className="archive-header category_bg" style={{ backgroundImage: `url(${premiumLeather})`, height: 300 }}>
        <div className="row align-items-center">
          <div className="col-xl-3">
            {title ? <h1 className="mb-15">{title}</h1> : ""}
            {color ? <h1 className="mb-15">{color}</h1> : ""}
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop <span></span> {title || color ||subtypes}
            </div>
          </div>
        </div>
      </div>
    )}
     {subtypes  && (
      <div className="archive-header category_bg" style={{ backgroundImage: `url(${casualImg})`, height: 300 }}>
        <div className="row align-items-center">
          <div className="col-xl-3">
            {title ? <h1 className="mb-15">{title}</h1> : ""}
            {color ? <h1 className="mb-15">{color}</h1> : ""}
            {subtypes ? <h1 className="mb-15">{subtypes}</h1> : ""}

            
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop <span></span> {title || color ||subtypes}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

          <div className="container mb-30">
            <div className="row flex-row-reverse">
              <div className="col-lg-4-5">
                <div className="shop-product-fillter">
                  <div className="totall-product">
                    <p>
                      We found <strong className="text-brand">{products.length}</strong> items for you!
                    </p>
                  </div>
                  <div className="products-per-page-dropdown">
                    <DropdownButton id="products-per-page-dropdown bg-light" title={`Products Per Page: ${productsPerPage}`}>
                      <Dropdown.Item onClick={() => handlePerPageChange(5)}>5</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(10)}>10</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(25)}>25</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(50)}>50</Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePerPageChange(100)}>100</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
                <div className="row product-grid">
  {updatedData.length === 0 ? (
    <h1>No Product Found!</h1>
  ) : (
    updatedData.map((item, index) => (
      <div className="col-lg-1-4 col-md-3 col-12 col-sm-6" key={index}>
        <ProductCard product={item} />
      </div>
    ))
  )}
</div>

                {/* Pagination */}
                <div className="text-center">
                  <Pagination>
                    <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                      <Pagination.Item key={i + 1} onClick={() => setCurrentPage(i + 1)} active={i + 1 === currentPage}>
                        {i + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === Math.ceil(products.length / productsPerPage)}
                    />
                  </Pagination>
                </div>
              </div>
              <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                {/* Sidebar Content */}

                <div className="sidebar-widget widget-category-2 mb-30">
                  <h5 className="section-title style-1 mb-30">Category</h5>
                  <ul>
                    <Link to="/categories/Casual Footwear">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Casual Footwear
                        </a>
                      </li>
                    </Link>
                    <Link to="/categories/Ethinic Footwear">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Ethinic Footwear
                        </a>
                      </li>

                    </Link>
                    <Link to="/categories/Formal Footwear">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Formal Footwear
                        </a>
                      </li>
                    </Link>
                    <Link to="/categories/Party Footwear">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Party Footwear
                        </a>
                      </li>
                    </Link>
                    <Link to="/categories/Sports Footwear">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Sports Footwear
                        </a>
                      </li>
                    </Link>
                    <Link to="/categories/Premium Leather">
                      <li>
                        <a>
                          {" "}
                          <img src="assets/imgs/theme/icons/category-1.svg" alt="" />
                          Premium Leather
                        </a>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="sidebar-widget price_range range mb-30">
                  <h5 className="section-title style-1 mb-30">Fill by price</h5>
                  <div className="price-filter">
                    <div className="price-filter-inner">
                      <Slider min={1000} max={10000} value={sliderValues} onChange={handleSliderChange} onClick={handleSliderClick} range />
                      
                    </div>
                  </div>
                  <div className="list-group">
                    <div className="list-group-item mb-10 mt-10">
                      <label className="fw-900">Color</label>
                      <div className="custome-checkbox">
                      {colors.map((color, index) => (
      <div  key={index}>
        <input className="form-check-input" type="checkbox" name={`checkbox${index}`} id={`exampleCheckbox${index + 1}`} value={color}  checked={selectedColors.includes(color)}
            // Call handleCheckboxChange function when checkbox is changed
            onChange={handleCheckboxChange}/>
        <label className="form-check-label" htmlFor={`exampleCheckbox${index + 1}`}>
          <span>{color}</span>
        </label>
        <br />
      </div>
    ))}
                      
                       
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-sm btn-default" onClick={()=>filteredDataByFilters()}>
                    <i className="fi-rs-filter mr-5"></i> Filter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>}
        <Footer />
      </div>
    </>
  );
};

export default ProductsGridPage;
