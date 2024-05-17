import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const TermsPage = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center my-5">Terms and Conditions</h1>
            <p className="lead text-center my-5">
              Welcome to TagsFootwear. These Terms and Conditions outline the rules and regulations for the use of our website and services.
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use TagsFootwear if you do not
              agree to all of the terms and conditions stated on this page.
            </p>
            <h4 className="mt-5 mb-4">1. Introduction</h4>
            <p>
              These Terms and Conditions govern your use of our website and the purchase of products from TagsFootwear. By accessing our
              website, you agree to comply with and be bound by these terms. These terms apply to all visitors, users, and others who access
              or use the Service.
            </p>
            <h4 className="mt-5 mb-4">2. Use of Website</h4>
            <p>
              By using this website, you warrant that you are at least 18 years of age or are accessing the website under the supervision of
              a parent or guardian. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights
              of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website.
            </p>
            <p>
              You must not misuse this website by knowingly introducing viruses, trojans, worms, logic bombs, or other material which is
              malicious or technologically harmful. You must not attempt to gain unauthorized access to this website, the server on which
              this website is stored, or any server, computer, or database connected to this website.
            </p>
            <h4 className="mt-5 mb-4">3. Orders and Payments</h4>
            <p>
              All orders are subject to acceptance and availability. When placing an order, you undertake that all details you provide to us
              are true and accurate, that you are an authorized user of the credit or debit card used to place your order, and that there
              are sufficient funds to cover the cost of the goods.
            </p>
            <p>
              We reserve the right to refuse any order placed with us. We may, in our sole discretion, limit or cancel quantities purchased
              per person, per household, or per order. These restrictions may include orders placed by or under the same customer account,
              the same credit card, and/or orders that use the same billing and/or shipping address.
            </p>
            <h4 className="mt-5 mb-4">4. Pricing and Availability</h4>
            <p>
              While we strive to ensure that all details, descriptions, and prices appearing on this website are accurate, errors may occur.
              If we discover an error in the price of any goods that you have ordered, we will inform you of this as soon as possible and
              give you the option of reconfirming your order at the correct price or canceling it. If we are unable to contact you, we will
              treat the order as canceled. If you cancel and you have already paid for the goods, you will receive a full refund.
            </p>
            <p>
              The availability of products on our website is subject to change without notice. We will not be liable for any lack of
              availability of products you may order through our website.
            </p>
            <h4 className="mt-5 mb-4">5. Shipping and Delivery</h4>
            <p>
              We offer 100% secure delivery without contacting the courier. Shipping times may vary based on product availability and your
              delivery location. Please review our Shipping Policy for detailed information about the shipping process, including expected
              delivery times and costs.
            </p>
            <p>
              Once your order has been shipped, we will provide you with a tracking number so you can monitor the status of your delivery.
              We are not responsible for delays caused by the carrier or by any events outside of our control.
            </p>
            <h4 className="mt-5 mb-4">6. Returns and Cancellations</h4>
            <p>
              If you are not satisfied with your purchase, you may return it in accordance with our Refund & Cancellation Policy. Items must
              be returned in their original condition and packaging within the specified return period. To initiate a return, please contact
              our customer service team with your order details.
            </p>
            <p>
              We reserve the right to refuse returns that do not comply with our return policy. If a return is refused, we will send the
              item back to you and you will not be entitled to a refund.
            </p>
            <h4 className="mt-5 mb-4">7. Intellectual Property</h4>
            <p>
              All content included on this site, such as text, graphics, logos, images, and software, is the property of TagsFootwear or its
              content suppliers and is protected by international copyright laws. You may not reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the site without express written permission by us.
            </p>
            <h4 className="mt-5 mb-4">8. Limitation of Liability</h4>
            <p>
              TagsFootwear shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in
              connection with the use of our website or products purchased from our website. This includes, without limitation, any loss of
              profits, business interruption, loss of business information, or any other pecuniary loss, even if TagsFootwear has been
              advised of the possibility of such damages.
            </p>
            <h4 className="mt-5 mb-4">9. Indemnification</h4>
            <p>
              You agree to indemnify, defend, and hold harmless TagsFootwear, its directors, officers, employees, consultants, agents, and
              affiliates, from any and all third-party claims, liability, damages, and/or costs (including, but not limited to, legal fees)
              arising from your use of this website or your breach of these Terms and Conditions.
            </p>
            <h4 className="mt-5 mb-4">10. Changes to Terms and Conditions</h4>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page. Your continued
              use of the website following the posting of any changes constitutes acceptance of those changes.
            </p>
            <h4 className="mt-5 mb-4">11. Governing Law</h4>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. You agree, as we do, to submit
              to the exclusive jurisdiction of the courts in Mysore, India.
            </p>
            <h4 className="mt-5 mb-4">12. Contact Us</h4>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
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

export default TermsPage;
