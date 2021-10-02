import React from 'react';
import { Link } from 'react-router-dom'

import './App.css'


function MainPage() {


  return (
    <div>
      {/* <div id="box" >
                    <Link to="/news"  >News</Link>
                </div>
                <div id="box" >
                    <Link to="/dictionary"  >dictionary</Link>
                </div> */}
      <header id="header">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="navbar-top">
              <div class="d-flex justify-content-between align-items-center">

              </div>
            </div>
            <div class="navbar-bottom">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <a class="navbar-brand" href="#"
                  ><img src="assets/images/logo.svg" alt=""
                    /></a>
                </div>
                <div>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="navbar-collapse justify-content-center collapse"
                    id="navbarSupportedContent"
                  >
                    <ul
                      class="navbar-nav d-lg-flex justify-content-between align-items-center"
                    >
                      <li>
                        <button class="navbar-close">
                          <i class="mdi mdi-close"></i>
                        </button>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="index.html"><Link to="/news" >News</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="pages/magazine.html"><Link to="/covid" >Covid</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="pages/contactus.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="social-media">
                  <li>
                    <a href="#">
                      <i class="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="mdi mdi-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="mdi mdi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

    </div>


  );
}

export default MainPage;
