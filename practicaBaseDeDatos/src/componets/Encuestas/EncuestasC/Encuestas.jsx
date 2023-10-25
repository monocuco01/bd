import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './encuestas.css'; 

const Encuestas = () => {
  const data = [
    { nombre: 'Juan', cedula: '1234567890', barrio: 'Barrio 1', estrato: '3' },
    { nombre: 'María', cedula: '9876543210', barrio: 'Barrio 2', estrato: '2' },
    // Agrega más datos aquí
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="encuestas-container">
      <h1>Lista de Personas</h1>
      <table className="encuestas-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Barrio</th>
            <th>Estrato</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.cedula}</td>
              <td>{item.barrio}</td>
              <td>{item.estrato}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Encuestas;
