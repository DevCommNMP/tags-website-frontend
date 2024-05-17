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
            <p className="lead text-center my-5">
              At TagsFootwear, we strive to provide a seamless shopping experience from the moment you place your order to the moment it
              arrives at your doorstep. Please read our detailed shipping policy below to understand how we handle shipping and delivery.
            </p>

            <h4 className="mb-2 mt-30">1. Order Processing</h4>
            <p>
              All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation
              email. You will receive another notification when your order has shipped.
            </p>
            <p>
              In the event of a high volume of orders, processing may be delayed by a few days. Please allow additional days in transit for
              delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or telephone.
            </p>

            <h4 className="mb-2 mt-30">2. Shipping Rates and Delivery Estimates</h4>
            <p>
              Shipping charges for your order will be calculated and displayed at checkout. We offer various shipping options to meet your
              needs:
            </p>
            <ul>
              <li>Standard Shipping: 5-7 business days</li>
              <li>Express Shipping: 2-3 business days</li>
              <li>Overnight Shipping: 1-2 business days</li>
            </ul>
            <p>
              Delivery delays can occasionally occur. Estimated delivery times are calculated from the date of shipment, not from the date
              of order.
            </p>

            <h4 className="mb-2 mt-30">3. Shipping Confirmation and Order Tracking</h4>
            <p>
              You will receive a shipping confirmation email once your order has shipped containing your tracking number(s). The tracking
              number will be active within 24 hours. You can track your order through our website or the carrier’s website using the
              tracking number provided.
            </p>

            <h4 className="mb-2 mt-30">4. International Shipping</h4>
            <p>
              We currently do not ship outside of India. Please stay tuned for updates as we work on expanding our shipping options to other
              countries.
            </p>

            <h4 className="mb-2 mt-30">5. Shipping to P.O. Boxes</h4>
            <p>
              TagsFootwear ships to addresses within India. We do not ship to P.O. Boxes. Please provide a physical address to ensure
              successful delivery.
            </p>

            <h4 className="mb-2 mt-30">6. Customs, Duties, and Taxes</h4>
            <p>
              TagsFootwear is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are
              the responsibility of the customer (tariffs, taxes, etc.).
            </p>

            <h4 className="mb-2 mt-30">7. Damages</h4>
            <p>
              TagsFootwear is not liable for any products damaged or lost during shipping. If you received your order damaged, please
              contact the shipment carrier or our support team directly to file a claim. Please save all packaging materials and damaged
              goods before filing a claim.
            </p>

            <h4 className="mb-2 mt-30">8. Missing or Delayed Shipments</h4>
            <p>
              If your shipment is delayed or you have not received your order within the expected delivery time, please contact us at{" "}
              <a href="mailto:support@tagsfootwear.com">support@tagsfootwear.com</a>. We will work with the shipping carrier to locate your
              package.
            </p>

            <h4 className="mb-2 mt-30">9. Returns</h4>
            <p>
              Our <a href="/refund-cancellation-policy">Refund & Cancellation Policy</a> outlines the process for returning items. If you
              have any issues with your order, please refer to this policy for guidance on how to proceed.
            </p>

            <h4 className="mb-2 mt-30">10. Contact Us</h4>
            <p>If you have any questions or concerns about our shipping policy, please contact us:</p>
            <div className="row">
              <div className="col-md-6">
                <h6> Address:</h6>
                <p>
                  1368, D-5, Narayana Shasthri Road, <br />
                  Devaraj Mohalla, Mysore - 570001
                  <br />
                </p>
              </div>
              <div className="col-md-6">
                <h6>Phone: </h6>
                <a href="tel:+919611459290">+91 96114 59290</a>
                <h6>Email: </h6>
                <a href="mailto:info@tagsfootwear.com">info@tagsfootwear.com</a>
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
