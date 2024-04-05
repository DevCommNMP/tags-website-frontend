import { Component } from "react";
// import ReactSlick from '../components/ReactSlick';
// import Slider from 'react-slick';
// import ReactImageMagnify from 'react-image-magnify';
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import watchImg687 from "../assets/wristwatch_687.jpg";
import watchImg1200 from "../assets/wristwatch_1200.jpg";
// import slick

import "./example.css";

export default class ReactSlickExample extends Component {
  render() {
    return (
      <div className="fluid react-slick">
        <div className="fluid__image-container">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: watchImg687,
              },
              largeImage: {
                src: watchImg1200,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className="fluid__instructions" style={{ position: "relative" }}>
          <div id="portal" className="portal" />
          <h3>External Enlarged Image Example</h3>
          <p>Render enlarged image into an HTML element of your choosing.</p>
          <p>Ignored for touch input by default but will be honored if isEnlargedImagePortalEnabledForTouch is implemented.</p>
          <p>Use cases include a scenario where an ancestor element of react-image-magnify implements overflow hidden.</p>
          <p>Requires React v16.</p>
          <p>
            Please see
            <a href="https://github.com/ethanselzer/react-image-magnify/blob/master/example/src/components/ExternalEnlargedImage.js">
              example source code
            </a>
            for details.
          </p>
        </div>
        <div style={{ height: "1000px" }} />
      </div>
    );
  }
}
