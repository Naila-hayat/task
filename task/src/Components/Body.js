import React, { useState, useRef } from "react";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";
import img7 from "../Assets/img7.png";
import "../Styles/Body.css"; // Link to your CSS

const Body = () => {
  const [showDetail, setShowDetail] = useState(false);
  const carouselRef = useRef(null);

  const imageSources = [img1, img2, img3, img4, img5, img6, img7]; // Add your imported images here

  const handleSlider = (type) => {
    if (!carouselRef.current) return;

    const items = carouselRef.current.querySelectorAll(".item");
    if (type === "next") {
      carouselRef.current.appendChild(items[0]);
    } else {
      carouselRef.current.prepend(items[items.length - 1]);
    }
  };

  const handleSeeMore = () => setShowDetail(true);
  const handleBack = () => setShowDetail(false);

  return (
    <div className={`carousel ${showDetail ? "showDetail" : ""}`}>
      <div className="list" ref={carouselRef}>
        {/* Dynamically map images and render carousel items */}
        {imageSources.map((src, index) => (
          <div className="item" key={index}>
            <img src={src} alt={`Item ${index + 1}`} />
            <div className="introduce">
              <div className="title">Best Wireless</div>
              <div className="topic">Headphones</div>
              <div className="des">
                Lintense pro 250 change you way of perceiving music in all its
                beauty by giving you more control on the sound than ever before
                paired with a unique listening experience.
              </div>
              <button className="seeMore" onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className="detail">
              <div className="title">Wireless Headphone </div>
              <div className="des">
                 Lintense pro 250 change you way of perceiving music in all its
                beauty by giving you more control on the sound than ever before
                paired with a unique listening experience.
              </div>
              <div className="specifications">
                <div>
                  <p>Battery Life</p>
                  <p>upto 20 hours</p>
                </div>
                <div>
                  <p>Power Port</p>
                  <p>USB-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Bluetooth devices</p>
                </div>
                <div>
                  <p>Noise</p>
                  <p>Clear audio</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.0</p>
                </div>
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => handleSlider("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => handleSlider("next")}>
          &gt;
        </button>

        {/* Conditionally render the "Go Back" button */}
        {showDetail && (
          <button id="back" onClick={handleBack}>
            Go Back &#8599;
          </button>
        )}
      </div>
    </div>
  );
};

export default Body;
