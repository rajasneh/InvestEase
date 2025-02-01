import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.9", fontSize: "1.2em" }}>
            {productDescription}
          </p>
          <div>
            <a href={learnMore}>
              Learn More&nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
