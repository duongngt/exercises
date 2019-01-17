import React from 'react';

const PageNav = () => {
    return(
        <div className="container row mt-5 ">
        <div className="col-md-5">
            <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item  active"><a className="page-link" >&lt;</a></li>
                      <li className="page-item"><a className="page-link">1</a></li>
                      <li className="page-item"><a className="page-link" >2</a></li>
                      <li className="page-item"><a className="page-link">3</a></li>
                      <li className="page-item"><a className="page-link">4</a></li>
                      <li className="page-item"><a className="page-link" >5</a></li>
                      <li className="page-item"><a className="page-link" >&gt;</a></li>
                    </ul>
                  </nav>
                </div>
        </div>
        </div>
    );
}
export default PageNav;