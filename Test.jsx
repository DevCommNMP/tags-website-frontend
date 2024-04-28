import { useEffect, useState } from "react";
import logo from "../assets/imgs/theme/logo.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchOrder, fetchOrderDetails } from "../redux/actions/order/orderActions";
import LoaderImg from "./LoaderImg";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
const Invoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [responseData, setresponseData] = useState([])

  useEffect(() => {
    const res = dispatch(fetchOrder(id));

    // setresponseData(res.payload)
  }, [id]);

  console.log(responseData)
  const orderData = useSelector(state => state.order);
  console.log(orderData)
  const { orderdata, loading, appErr, serverErr } = orderData;
// console.log(orderdata)
  // console.log(orderData.orderdata.subtotal);
  const currentDate = new Date(orderData.orderdata.Date);

  // Format the date in the US standard (MM/DD/YYYY)
  const formattedDate = currentDate.toLocaleDateString('en-US');
  // console.log(orderDetails)

  

  return (
    <div>
      <div className="invoice invoice-content invoice-5">
        <div className="back-top-home hover-up mt-30 ml-30">
          <Link className="hover-up" to="/">
            <i className="fi-rs-home mr-5"></i> Homepage
          </Link>
        </div>
        {loading ? <LoaderImg /> : <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="invoice-inner">
                <div className="invoice-info" id="invoice_wrapper">
                  <div className="invoice-header">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="logo d-flex align-items-center">
                          <Link className="mr-20" to="/">
                            <img src={logo} alt="logo" width={"250px"} />
                          </Link>
                          <div className="text">
                            <strong className="text-brand">Tags Footwear</strong> <br />
                            1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-end">
                        <h2>INVOICE</h2>
                        <h6>
                          ID Number: <span className="text-brand">{orderData.orderdata.orderName}</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <div className="invoice-banner">
                    <img src={bannerImg} alt="" />
                  </div> */}
                  <div className="invoice-center">
                    <div className="table-responsive">
                      <table className="table table-striped invoice-table">
                        <thead className="bg-active">
                          <tr>
                            <th>Item Item</th>
                            <th className="text-center">Unit Price</th>
                            <th className="text-right">Tax</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-right">Amount</th>
                          
                          </tr>
                        </thead>
                        <tbody>

                          {orderdata && orderdata.productDetails && orderdata.productDetails.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <div className="item-desc-1">
                                    <span>{item.product.title}</span>
                                    <small>SKUID: {item.product.productName}</small>
                                  </div>
                                </td>
                                <td className="text-center"><span style={{ fontSize: 15 }}>&#8377;</span>{item.product.SellingPrice}</td>
                                <td className="text-center">{item.tax}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-right">&#8377;{item.product.SellingPrice * item.quantity}</td>
                              </tr>
                            );
                          })}
                          <tr>
                            <td colSpan="3" className="text-end f-w-600">
                              SubTotal
                            </td>
                            <td className="text-right">&#8377;{orderData.orderdata.subtotal}</td>
                          </tr>
                          {orderData.orderdata.CGST ? (
                            <tr>
                              <td colSpan="3" className="text-end f-w-600">
                                CGST
                              </td>
                              <td className="text-right">&#8377;{orderData.orderdata.CGST}</td>
                            </tr>
                          ) : null}
                            {orderData.orderdata.SGST ? (
                            <tr>
                              <td colSpan="3" className="text-end f-w-600">
                                SGST
                              </td>
                              <td className="text-right">&#8377;{orderData.orderdata.SGST}</td>
                            </tr>
                          ) : null}
                            <tr>
                            <td colSpan="3" className="text-end f-w-600">
                              Grand Total
                            </td>
                            <td className="text-right f-w-600">&#8377; {orderData.orderdata.SGST + orderData.orderdata.CGST + orderData.orderdata.subtotal}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="invoice-bottom pb-80">
                    <div className="row">
                    <div className="col-md-6">
  <h6 className="mb-15">Invoice Info</h6>
  <p className="font-sm">
    {formattedDate ? <><strong>Issue date:</strong> {formattedDate}</> : null}
    <br />
    {orderdata && orderdata.billingDetails ? (
      <>
        <strong>Invoice To:</strong> {orderdata.billingDetails.fname} {orderdata.billingDetails.lname}
        <br />
        <strong>Shipping Address:</strong> {orderdata.billingDetails.billing_address}
        <br />
        {orderdata.billingDetails.billing_address2 && (
          <>
            {orderdata.billingDetails.billing_address2}
            <br />
          </>
        )}
        {orderdata.billingDetails.city && (
          <>
            {orderdata.billingDetails.city}
            <br />
          </>
        )}
        {orderdata.billingDetails.phone && (
          <>
            {orderdata.billingDetails.phone}
            <br />
          </>
        )}
        {orderdata.billingDetails.state && (
          <>
            {orderdata.billingDetails.state}
            <br />
          </>
        )}
        {orderdata.billingDetails.zipcode && (
          <>
            {orderdata.billingDetails.zipcode}
            <br />
          </>
        )}
      </>
    ) : null}
    <br />
    <strong>Swift Code:</strong> BFTV VNVXS
  </p>
</div>

                      <div className="col-md-6 text-end">
                        <h6 className="mb-15">Total Amount</h6>
                        <h3 className="mt-0 mb-0 text-brand">&#8377; {orderData.orderdata.SGST + orderData.orderdata.CGST + orderData.orderdata.subtotal}</h3>
                        <p className="mb-0 text-muted">Taxes Included</p>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="hr mt-30 mb-30"></div>
                      <p className="mb-0 text-muted">
                        <strong>Note:</strong>This is computer generated receipt and does not require physical signature.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="invoice-btn-section clearfix d-print-none">
                  <a href="javascript:window.print()" className="btn btn-lg btn-custom btn-print hover-up">
                    {" "}
                    <img src="assets/imgs/theme/icons/icon-print.svg" alt="" /> Print{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Invoice;
