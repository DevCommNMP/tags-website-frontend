import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center mb-4">Refund and Cancellation Policy</h1>
            <p className="lead text-center">
              At TagsFootwear, we strive to provide our customers with the best shopping experience possible. If you are not entirely
              satisfied with your purchase, we're here to help. Please read our detailed refund and cancellation policy below to understand
              your rights and our obligations.
            </p>

            <h4 className="mt-5 mb-4">1. Returns</h4>
            <p>
              Our return policy lasts 30 days from the date you receive your purchase. If 30 days have passed since your purchase,
              unfortunately, we cannot offer you a refund or exchange.
            </p>
            <p>
              To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original
              packaging. We cannot accept returns for certain items, including perishable goods, intimate or sanitary goods, and hazardous
              materials. Additionally, gift cards, downloadable software products, and some health and personal care items are
              non-returnable.
            </p>
            <p>
              To initiate a return, please contact our customer service team at{" "}
              <a href="mailto:info@tagsfootwear.com">info@tagsfootwear.com</a> or call us at +91 98444 88700. Please provide your order
              number, receipt, or proof of purchase, and a detailed explanation of the reason for your return.
            </p>

            <h4 className="mt-5 mb-4">2. Refunds</h4>
            <p>
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item.
              We will also inform you of the approval or rejection of your refund. If your return is approved, we will process your refund,
              and a credit will automatically be applied to your original method of payment within a certain number of days.
            </p>
            <p>Please note that there are certain situations where only partial refunds are granted:</p>
            <ul>
              <li>Any item not in its original condition, damaged, or missing parts for reasons not due to our error.</li>
              <li>Any item returned more than 30 days after delivery.</li>
            </ul>

            <h4 className="mt-5 mb-4">3. Late or Missing Refunds</h4>
            <p>
              If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take
              some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a
              refund is posted.
            </p>
            <p>
              If you’ve done all of this and you still have not received your refund yet, please contact us at{" "}
              <a href="mailto:info@tagsfootwear.com">info@tagsfootwear.com</a>.
            </p>

            <h4 className="mt-5 mb-4">4. Exchanges</h4>
            <p>
              We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please send us
              an email at <a href="mailto:info@tagsfootwear.com">info@tagsfootwear.com</a> and send your item to: 1368, D-5, Narayana
              Shasthri Road, Devaraj Mohalla, Mysore - 570001, India.
            </p>

            <h4 className="mt-5 mb-4">5. Shipping Returns</h4>
            <p>
              To return your product, you should mail your product to: 1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001,
              India.
            </p>
            <p>
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If
              you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
            <p>
              Depending on where you live, the time it may take for your exchanged product to reach you may vary. If you are shipping an
              item over ₹2000, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee
              that we will receive your returned item.
            </p>

            <h4 className="mt-5 mb-4">6. Order Cancellations</h4>
            <p>
              You can cancel your order within 24 hours of placing it by contacting us at{" "}
              <a href="mailto:info@tagsfootwear.com">info@tagsfootwear.com</a> or calling us at +91 98444 88700. If your order has already
              been shipped, we will be unable to cancel it, and you will need to follow our return process.
            </p>

            <h4 className="mt-5 mb-4">7. Non-Returnable Items</h4>
            <p>Some items are non-returnable. These include:</p>
            <ul>
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Some health and personal care items</li>
            </ul>

            <h4 className="mt-5 mb-4">8. Contact Us</h4>
            <p>If you have any questions or need assistance with your refund or cancellation, please contact our customer service team:</p>
            <p>
              Address: 1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001, India
              <br />
              Phone: +91 98444 88700
              <br />
              Email: <a href="mailto:info@tagsfootwear.com">info@tagsfootwear.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
