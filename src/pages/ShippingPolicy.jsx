import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ShippingPolicy = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center my-5">Shipping Policy</h1>

            <div className="container my-4">
              {/* <h2 className="section-title text-uppercase fw-bold mb-5">Shipping and Delivery</h2> */}

              <div className="shipping-content">
                <p className="mb-4">
                  For International buyers, orders are shipped and delivered through registered international courier companies and/or
                  International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and
                  /or speed post only.
                </p>
                <p className="mb-4">
                  Orders are typically dispatched within 0-7 days, or as per the delivery date agreed upon at the time of order
                  confirmation. However, actual delivery times may vary depending on the Courier Company / post office norms.
                </p>
                <p className="mb-4">
                  TAGS FOOTWEAR endeavors to hand over the consignment to the courier company or postal authorities promptly within the
                  specified time frame. Please note that TAGS FOOTWEAR is not liable for any delay in delivery by the courier company /
                  postal authorities.
                </p>
                <p className="mb-4">
                  Delivery of all orders will be made to the address provided by the buyer. Additionally, confirmation of delivery will be
                  sent to the buyer&apos;s specified email address upon registration.
                </p>
                <p>
                  Should you encounter any issues in utilizing our services, please feel free to contact our helpdesk at
                  <a href="tel:7349319077">7349319077</a> or via email at{" "}
                  <a href="mailto:tagsfootwear.2023@gmail.com">tagsfootwear.2023@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
