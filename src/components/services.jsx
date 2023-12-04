import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Funcionalidades</h2>
          <p>
            Todas nuestras funcionalidades están pensadas para hacerte la vida
            más fácil.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>

        <h3 style={{ fontWeight: 700, fontSize: 34 }}>¿Cómo funciona?</h3>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              width: "100%",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="what is cohabitamos"
              src="https://firebasestorage.googleapis.com/v0/b/cohabitemos-b0425.appspot.com/o/videos%2Fadministradores%2FCOMO_FUNCIONA.mp4?alt=media&token=ab50c26d-292e-4340-86f6-89d2c9186e27"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="btn-container" style={{ marginTop: 20 }}>
          <a
            href="https://www.app.cohabitamos.com/ayuda"
            target="_blank"
            className="btn btn-cta btn-lg"
            rel="noreferrer"
          >
            Saber más
          </a>
        </div>
        <p style={{ marginTop: "15px" }}>
          Constantemente estamos incorporando funcionalidades nuevas que estarán
          incluidas en el pago de la herramienta, por lo que no tendrán costo
          adicional.
        </p>
      </div>
    </div>
  );
};
