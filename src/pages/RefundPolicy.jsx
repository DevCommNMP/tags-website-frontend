import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center mb-4">Refund &amp; Cancellation Policy</h1>

            <div className="container my-4">
              <p>
                <strong>TAGS FOOTWEAR</strong> believes in helping its customers as far as possible, and has therefore a liberal
                cancellation policy. Under this policy:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Cancellations:</strong> Cancellations will be considered only if the request is made within 2 days of placing the
                  order. However, the cancellation request may not be entertained if the orders have been communicated to the
                  vendors/merchants and they have initiated the process of shipping them.
                </li>
                <li className="mb-3">
                  <strong>Perishable Items:</strong> TAGS FOOTWEAR does not accept cancellation requests for perishable items like flowers,
                  eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is
                  not good.
                </li>
                <li className="mb-3">
                  <strong>Damaged or Defective Items:</strong> In case of receipt of damaged or defective items please report the same to
                  our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same
                  at his own end. This should be reported within 2 days of receipt of the products.
                </li>
                <li className="mb-3">
                  <strong>Product Not as Expected:</strong> In case you feel that the product received is not as shown on the site or as per
                  your expectations, you must bring it to the notice of our customer service within 2 days of receiving the product. The
                  Customer Service Team after looking into your complaint will take an appropriate decision.
                </li>
                <li className="mb-3">
                  <strong>Warranty Issues:</strong> In case of complaints regarding products that come with a warranty from manufacturers,
                  please refer the issue to them.
                </li>
                <li className="mb-3">
                  <strong>Refunds:</strong> In case of any Refunds approved by the TAGS FOOTWEAR, it’ll take 6-8 days for the refund to be
                  processed to the end customer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
