import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>TARIFAS</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="grid col-sm-6 col-md-4 col-lg-4 gap-3"
                  >
                    <div
                      style={{
                        borderRadius: 10,
                        background:
                          "linear-gradient(to right,  #5c9df1 100%, rgba(47, 184, 255, 0.42) 31.77%)",
                        margin: "10px auto",
                      }}
                    >
                      <div
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10,
                          color: "white",
                        }}
                      >
                        <h1 style={{ fontWeight: "bolder" }}>{d.title}</h1>
                        <h1>{d.price}</h1>
                      </div>
                      <div
                        style={{
                          backgroundColor: "white",
                          paddingTop: 10,
                          paddingBottom: 10,
                        }}
                      >
                        <p>Precio por conjunto</p>
                        <p style={{ fontWeight: "bold" }}>{d.towers}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>

        <div>
          <h3>Regístrate ahora para obtener 60 días de prueba gratis.</h3>
          <div className="btn-container">
            <a
              href="https://app.cohabitamos.com/registro"
              target="_blank"
              className="btn btn-cta btn-lg"
              rel="noreferrer"
            >
              Registrarme
            </a>
          </div>

          <p style={{ marginTop: 30 }}>
            Por estar en nuestra versión beta, los 60 días comenzarán a contar
            en el momento del lanzamiento oficial.
          </p>
          <p>
            Así que regístrate y ayúdanos a construir la solución que tu
            necesitas.
          </p>
        </div>
      </div>
    </div>
  );
};
