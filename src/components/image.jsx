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
    <div
      // className="portfolio-item"
      style={{
        border: "1px solid rgba( 0, 0, 0, 0.18 )",
        background:
          "linear-gradient(to right,  #5c9df1 100%, rgba(47, 184, 255, 0.42) 31.77%)",

        backgroundColor: "#6372ff",
        backdropFilter: "blur( 18px )",
        color: "whitesmoke",
        boxShadow: "none",
        borderRadius: "10px",
        margin: "10px auto",
      }}
    >
      <div className="hover-bg">
        {" "}
        {/* <a href={largeImage} title={title} data-lightbox-gallery="gallery1"> */}
        <div style={{ padding: "20px" }}>
          <p>
            <i className={icon} />
          </p>
          <h3 className="title">{title}</h3>
          <p>{towers}</p>
          <p>{price}</p>
        </div>
        {/* <img src={smallImage} className="img-responsive" alt={title} />{" "} */}
        {/* </a>{" "} */}
      </div>
    </div>
  );
};
