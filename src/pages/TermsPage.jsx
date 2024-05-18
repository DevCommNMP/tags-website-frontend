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
            <div className="container my-4">
              <h2 className="section-title text-uppercase fw-bold mb-5"></h2>

              <div className="container my-4">
                <h2 className="section-title text-uppercase fw-bold mb-5"></h2>

                <p className="mb-4">
                  For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean TAGS
                  FOOTWEAR, whose registered/operational office is 1368 D-5, NARAYANA SHASTHRI ROAD, Devraj Mohalla, Mysore Mysore KARNATAKA
                  570001. "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed
                  to purchase from us.
                </p>

                <p className="mb-4">Your use of the website and/or purchase from us are governed by following Terms and Conditions:</p>

                <ul className="mb-4">
                  <li style={{ listStyleType: "disc" }}>The content of the pages of this website is subject to change without notice.</li>
                  <li style={{ listStyleType: "disc" }}>
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance,
                    completeness or suitability of the information and materials found or offered on this website for any particular
                    purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude
                    liability for any such inaccuracies or errors to the fullest extent permitted by law.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we
                    shall not be liable. It shall be your own responsibility to ensure that any products, services or information available
                    through our website and/or product pages meet your specific requirements.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the
                    design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright
                    notice, which forms part of these terms and conditions.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on
                    the website.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    From time to time our website may also include links to other websites. These links are provided for your convenience to
                    provide further information.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    You may not create a link to our website from another website or document without TAGS FOOTWEAR’s prior written consent.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the
                    laws of India.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the
                    decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually
                    agreed by us with our acquiring bank from time to time.
                  </li>
                </ul>
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
