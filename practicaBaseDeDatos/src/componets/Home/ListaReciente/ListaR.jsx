import React from "react";
import "./lista.css"; 

const ListaR = () => {
  const data = [
    { nombre: "Juan", cedula: "1234567890", barrio: "Barrio 1" },
    { nombre: "María", cedula: "9876543210", barrio: "Barrio 2" },
  ];

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Barrio</th>
            <th>Extracto</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.cedula}</td>
              <td>{item.barrio}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaR;
