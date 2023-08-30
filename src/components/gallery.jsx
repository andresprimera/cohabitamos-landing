import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>TARIFAS</h2>
          <p>
            Nuestras tarifas se calculan en función de las torres que necesite
            administrar independientemente del número de unidades.
          </p>
          <p>
            Las torres pueden estar dentro del mismo conjunto o pertenecer a
            conjuntos diferentes.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="grid col-sm-6 col-md-4 col-lg-4 gap-3"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      price={d.price}
                      towers={d.towers}
                      icon={d.icon}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
