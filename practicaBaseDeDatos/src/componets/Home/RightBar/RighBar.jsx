import React from "react";
import "./righBar.css";
import { Link } from "react-router-dom";

const RighBar = () => {
  return (
    <div className="containerRight">
      <div className="containerlinks">
        <Link to="/">
          <div className="botoncitosR">
            <i class="bis bi-house"></i>Inicio
          </div>
        </Link>
        <Link to="/encuesta">
          <div className="botoncitosR">
            <i class="bis bi-person-lines-fill"></i>
            encuestas
          </div>
        </Link>
      </div>
      <Link to="/facebook.com">
        <div className="botoncitosRs">
          <i class="bis bi-box-arrow-left"></i>
          salir
        </div>
      </Link>
    </div>
  );
};

export default RighBar;
