import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <div className="page-content pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="row">
                <div className="col-12">
                  <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                    <div className="single-content mb-50">
                      <h1 className="text-center mb-4">Privacy Policy</h1>
                      <p className="lead text-center">
                        At TagsFootwear, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and
                        safeguard your information when you visit our website and purchase our products.
                      </p>

                      <h4 className="mt-5 mb-4">1. Information We Collect</h4>
                      <p>We collect various types of information in connection with the services we provide, including:</p>
                      <ul>
                        <li>
                          <strong>Personal Information:</strong> This includes your name, email address, phone number, shipping address, and
                          payment details. We collect this information when you place an order or create an account on our website.
                        </li>
                        <li>
                          <strong>Non-Personal Information:</strong> This includes data that cannot be used to identify you personally, such
                          as browser type, operating system, and the pages you visit on our website.
                        </li>
                        <li>
                          <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track your activity
                          on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate
                          when a cookie is being sent.
                        </li>
                      </ul>

                      <h4 className="mt-5 mb-4">2. How We Use Your Information</h4>
                      <p>We use the information we collect for various purposes, including:</p>
                      <ul>
                        <li>To process and fulfill your orders</li>
                        <li>To improve our website and services</li>
                        <li>To communicate with you, including sending order confirmations, updates, and promotional materials</li>
                        <li>To monitor and analyze usage and trends to enhance your experience on our website</li>
                        <li>To comply with legal obligations and protect our rights</li>
                      </ul>

                      <h4 className="mt-5 mb-4">3. Sharing Your Information</h4>
                      <p>
                        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information, except in
                        the following circumstances:
                      </p>
                      <ul>
                        <li>
                          With third-party service providers who assist us in operating our website, conducting our business, or servicing
                          you, so long as those parties agree to keep this information confidential
                        </li>
                        <li>
                          When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or
                          others' rights, property, or safety
                        </li>
                        <li>In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
                      </ul>

                      <h4 className="mt-5 mb-4">4. Security of Your Information</h4>
                      <p>
                        We implement a variety of security measures to maintain the safety of your personal information when you place an
                        order or enter, submit, or access your personal information. These measures include using secure servers and
                        encrypting sensitive information.
                      </p>
                      <p>
                        However, please note that no method of transmission over the Internet, or method of electronic storage, is 100%
                        secure. While we strive to use commercially acceptable means to protect your personal information, we cannot
                        guarantee its absolute security.
                      </p>

                      <h4 className="mt-5 mb-4">5. Your Rights</h4>
                      <p>
                        You have the right to access, update, or delete your personal information at any time. To do so, please contact us
                        at <a href="mailto:info@tagsfootwear.com">info@tagsfootwear.com</a>. We will respond to your request within a
                        reasonable timeframe.
                      </p>
                      <p>
                        You also have the right to opt-out of receiving promotional communications from us by following the unsubscribe
                        instructions provided in those communications.
                      </p>

                      <h4 className="mt-5 mb-4">6. Third-Party Links</h4>
                      <p>
                        Our website may contain links to third-party websites. These third-party sites have separate and independent privacy
                        policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
                        Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
                      </p>

                      <h4 className="mt-5 mb-4">7. Changes to Our Privacy Policy</h4>
                      <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
                        Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this
                        Privacy Policy are effective when they are posted on this page.
                      </p>

                      <h4 className="mt-5 mb-4">8. Contact Us</h4>
                      <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
