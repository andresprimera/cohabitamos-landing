import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{ marginTop: "50px" }}>
            {/* <img src="img/about.jpeg" className="img-responsive" alt="" />{" "} */}
            <iframe
              title="what is cohabitamos"
              width="560"
              height="315"
              src="https://firebasestorage.googleapis.com/v0/b/cohabitemos-b0425.appspot.com/o/videos%2FPROMOCIONAL.mp4?alt=media&token=6e52a0a7-d1d9-42d5-8240-385386b7bc94"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              loading="lazy"
            ></iframe>
            <p className="btn-container">
              <a
                href="https://www.app.cohabitamos.com/registro"
                target="_blank"
                className="btn btn-custom btn-lg"
                rel="noreferrer"
              >
                Iniciar prueba gratuita
              </a>
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>¿Por qué Cohabitamos?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Beneficios</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
