import React from 'react';
const Header = () =>{
    return(
        <div>
        <header role="banner">
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-9 social">
                <a href="#"><span className="fa fa-twitter"></span></a>
                <a href="#"><span className="fa fa-facebook"></span></a>
                <a href="#"><span className="fa fa-instagram"></span></a>
                <a href="#"><span className="fa fa-youtube-play"></span></a>
              </div>
              <div className="col-3 search-top">
                <form action="#" className="search-top-form">
                  <span className="icon fa fa-search"></span>
                  <input type="text" id="s" placeholder="Type keyword to search..."/>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container logo-wrap">
          <div className="row pt-5">
            <div className="col-12 text-center">
              <a className="absolute-toggle d-block d-md-none" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></a>
              <h1 className="site-logo"><a href="index.html">Wordify</a></h1>
            </div>
          </div>
        </div>
        
        <nav className="navbar navbar-expand-md  navbar-light bg-light">
          <div className="container">
            
           
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" >Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Contact</a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </header>
      <section className="site-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme home-slider">
                <div>
                  <a className="a-block d-flex align-items-center height-lg" >
                    <div className="text half-to-full">
                      <span className="category mb-5">Food</span>
                      <div className="post-meta">
                        
                        <span className="author mr-2"><img src="assets/images/person_1.jpg" alt="Colorlib"/> Colorlib</span>&bullet;
                        <span className="mr-2">March 15, 2018 </span> &bullet;
                        <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                        
                      </div>
                      <h3>How to Find the Video Games of Your Youth</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a className="a-block d-flex align-items-center height-lg">
                    <div className="text half-to-full">
                      <span className="category mb-5">Travel</span>
                      <div className="post-meta">
                        
                        <span className="author mr-2"><img src="assets/images/person_1.jpg" alt="Colorlib"/> Colorlib</span>&bullet;
                        <span className="mr-2">March 15, 2018 </span> &bullet;
                        <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                        
                      </div>
                      <h3>How to Find the Video Games of Your Youth</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a  className="a-block d-flex align-items-center height-lg">
                    <div className="text half-to-full">
                      <span className="category mb-5">Sports</span>
                      <div className="post-meta">
                        
                        <span className="author mr-2"><img src="assets/images/person_1.jpg" alt="Colorlib"/> Colorlib</span>&bullet;
                        <span className="mr-2">March 15, 2018 </span> &bullet;
                        <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                        
                      </div>
                      <h3>How to Find the Video Games of Your Youth</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                    </div>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
      </div>
    );
}
export default Header;