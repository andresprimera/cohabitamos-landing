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
        <p>
          Constantemente estamos incorporando funcionalidades nuevas que están
          incluidas en el pago de la herramienta.
        </p>
      </div>
    </div>
  );
};
