import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import CodingBoxLogo from "../assets/svg/CodingLogo";
import CodingBoxColoredLogo from "../assets/svg/CodingBoxColoredLogo";
import SvgComponent from "../assets/svg/CodingBoxColoredLogo";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>¿Necesitas más información?</h2>
                <p>
                  Agenda una reunión de 30 minutos con nuestro equipo para
                  conocer más a fondo las ventajas de cohabitamos y cómo podemos
                  ayudarte con el día a día de tu gestión como administrador de
                  Propiedad Horizontal.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <a
                  href="https://calendly.com/codingboxapp/presentacion-cohabitamos"
                  className="btn btn-custom btn-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar una reunión
                </a>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de contacto</h3>
              {/* <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p> */}
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Teléfono
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div
          className="container "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &copy; 2023 Todos los derechos reservados. Un Producto de:{" "}
          <a href="http://www.codingbox.app" rel="nofollow">
            <SvgComponent />
          </a>
        </div>
      </div>
    </div>
  );
};
