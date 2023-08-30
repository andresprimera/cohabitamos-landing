import React from "react";

export const Image = ({
  title,
  largeImage,
  smallImage,
  price,
  towers,
  icon,
}) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        {/* <a href={largeImage} title={title} data-lightbox-gallery="gallery1"> */}
        <div className="hover-text">
          <h4>{"Comprar este plan"}</h4>
        </div>
        <div style={{ padding: "20px" }}>
          <p>
            <i className={icon} />
          </p>
          <h4>{title}</h4>
          <p>{towers}</p>
          <p>{price}</p>
        </div>
        {/* <img src={smallImage} className="img-responsive" alt={title} />{" "} */}
        {/* </a>{" "} */}
      </div>
    </div>
  );
};
