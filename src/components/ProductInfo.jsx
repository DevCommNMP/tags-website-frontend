import Product from "../pages/product";

const ProductInfo = ({product}) => {
  console.log(product)
  return (
    <>
      <div className="product-info">
        <div className="tab-style3">
          <div className="tab-content shop_info_tab entry-main-content">
            <div className="tab-pane fade show active" id="Description">
              <div className="">
               
                <hr className="wp-block-separator is-style-dots" />
                <p>
                Discover the perfect blend of style, comfort, and versatility with our diverse range of women's footwear. From sophisticated heels to laid-back flats, sporty sneakers to elegant boots, and chic sandals to cozy slippers, our collection caters to every occasion and preference. Crafted with attention to detail and quality materials, each pair is designed to elevate your look and provide lasting comfort throughout your day. Whether you're stepping out for work, leisure, or a special event, our footwear ensures you stride with confidence and flair, no matter where life takes you.
                </p>
                <h4 className="mt-30">Packaging & Delivery</h4>
                <hr className="wp-block-separator is-style-wide" />
                <p>
                For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only.

Orders are typically dispatched within 0-7 days, or as per the delivery date agreed upon at the time of order confirmation. However, actual delivery times may vary depending on the Courier Company / post office norms..
                </p>
                <p>
                TAGS FOOTWEAR endeavors to hand over the consignment to the courier company or postal authorities promptly within the specified time frame. Please note that TAGS FOOTWEAR is not liable for any delay in delivery by the courier company / postal authorities.

Delivery of all orders will be made to the address provided by the buyer. Additionally, confirmation of delivery will be sent to the buyer's specified email address upon registration.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
