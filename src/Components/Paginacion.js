import React from 'react'


export const Paginacion = () => {
  return (
    <div>
      <nav aria-label="Page navigation example animated fadeInDown">
        <ul className="pagination justify-content-center animated fadeInDown">
          {/*  <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Atras</a>
    </li>

    */}
          <li className="page-item"><a className="page-link" href="/Home">1</a></li>
          <li className="page-item"><a className="page-link" href="/Pagina2">2</a></li>
          <li className="page-item"><a className="page-link" href="Pagina3">3</a></li>
          <li className="page-item"><a className="page-link" href="Pagina4">4</a></li>
          <li className="page-item"><a className="page-link" href="Pagina5">5</a></li>

          {/*   <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
    */}
        </ul>
      </nav>
    </div>
  )
}
