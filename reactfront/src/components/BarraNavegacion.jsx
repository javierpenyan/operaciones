import React from "react";
import { Link, NavLink } from "react-router-dom";

export const BarraNavegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Inicio
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/mostrarIngresos"
            >
              Ingresos
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/mostrarDegresos"
            >
              Degresos
            </NavLink>
          </ul>
        </div>
        <div>
          <Link className="navbar-brand my-4" to="/crearOperacion">
            Crear Operación
          </Link>
        </div>
      </div>
    </nav>
  );
};
