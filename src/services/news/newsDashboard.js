import React, { useState } from 'react';
import axios from 'axios'
import Article from './Article';






function NewsDashboard() {

  const [data, setData] = useState([]);
  const [firstNews, setFirstNews] = useState()
  const [firstPic, setFirstPic] = useState()
  const [firstDesc, setFirstdesc] = useState()
  const [latest, setLatest] = useState([])
  const [id, setId] = useState(null)
  const [allArticle, setArticles] = useState([])
  // console.log("title", firstNews)
  // console.log("latest", latest)

  axios
    .get("https://saurav.tech/NewsAPI/everything/cnn.json")
    // .then(res => console.log(res))
    .then(function (result) {
      // console.log(result)
      let allArticles = result.data.articles
      setArticles(allArticles)
      let d = result.data.articles
      const mainNews = d[0].title
      const mainPic = d[0].urlToImage
      const maindesc = d[0].description
      // console.log("latest", d.slice(0,3))
      setLatest(d.slice(1, 4))

      // console.log(mainNews)
      setFirstNews(mainNews)
      setFirstPic(mainPic)
      setFirstdesc(maindesc)
      // console.log(d)
      const rem = d.splice(0, 4)
      setData(d)
    })
    .catch(err => {
      console.log(err);

    });


  const handleIdChange = (index) => {
    setId(index)
    console.log(index)
  }

  // var url = 'https://saurav.tech/NewsAPI/everything/cnn.json';

  // fetch(url).then(res => res.json())
  //     .then(function (result) {
  //         // console.log(result)
  //         let d = result.articles
  //         console.log(d)
  //         setData(d)

  //     })




  return (

    <body>

      <Article  data={allArticle} id={id} />
      <div className="container-scroller">
        <div className="main-panel">

          {/* <header id="header">
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="navbar-top">
                    <div className="d-flex justify-content-between align-items-center">
                      
                    </div>
                  </div>
                  <div className="navbar-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <a className="navbar-brand" href="#"
                          ><img src="assets/images/logo.svg" alt=""
                        /></a>
                      </div>
                      <div>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                          className="navbar-collapse justify-content-center collapse"
                          id="navbarSupportedContent"
                        >
                          <ul
                            className="navbar-nav d-lg-flex justify-content-between align-items-center"
                          >
                            <li>
                              <button className="navbar-close">
                                <i className="mdi mdi-close"></i>
                              </button>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/magazine.html">MAGAZINE</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/business.html">Business</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/sports.html">Sports</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/art.html">Art</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/politics.html">POLITICS</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/travel.html">Travel</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/contactus.html">Contact</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="social-media">
                        <li>
                          <a href="#">
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
     */}
          <div className="content-wrapper">
            <div className="container">
              <div className="row" data-aos="fade-up">
                <div className="col-xl-8 stretch-card grid-margin">
                  <div className="position-relative">
                    <img
                      src={firstPic}
                      alt="banner"
                      className="img-fluid"
                      title={firstNews}
                    />
                    <div className="banner-content">
                      <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                        global news
                      </div>
                      <h1 className="mb-0"></h1>
                      <h1 className="mb-2">
                        {firstNews}
                      </h1>
                      <div className="fs-12">
                        <span className="mr-2">Photo </span>10 Minutes ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 stretch-card grid-margin">
                  <div className="card bg-dark text-white">
                    <div className="card-body">
                      <h2>Latest news</h2>

                      {
                        latest?.map((item, i) => (
                          <div
                            className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                            key={i}
                          >
                            <div className="pr-3">
                              <h5 onClick={() => handleIdChange(i)} >{item.title}</h5>
                              <div className="fs-12">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </div>
                            </div>
                            <div className="rotate-img">
                              <img
                                src={item.urlToImage}
                                alt="thumb"
                                className="img-fluid img-lg"
                              />
                            </div>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-lg-3 stretch-card grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h2>Category</h2>
                      <ul className="vertical-menu">
                        <li><a href="#">Politics</a></li>
                        <li><a href="#">International</a></li>
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">Health care</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Administration</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Game</a></li>
                        <li><a href="#">Art</a></li>
                        <li><a href="#">Kids</a></li>
                      </ul>
                    </div>
                  </div>
                </div>





                <div className="col-lg-9 stretch-card grid-margin">
                  <div className="card">
                    <div className="card-body">
                      {data?.map((item, i) => (
                        <div className="row" key={i} >
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src={item.urlToImage}
                                  alt="thumb"
                                  className="img-fluid"
                                  title={item.title}
                                />
                              </div>
                              <div className="badge-positioned">
                                {/* <span className="badge badge-danger font-weight-bold"
                                >Flash news</span
                                > */}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <h2 className="mb-2 font-weight-600" >
                              {item.title}
                            </h2>
                            <div className="fs-13 mb-2">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p className="mb-0">
                              {item.description}<button onClick={() => handleIdChange(i)} >....</button>
                            </p>
                          </div>
                        </div>
                      ))}


                    </div>
                  </div>
                </div>





              </div>


            </div>
          </div>

          <footer>
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5">
                    <img src="assets/images/logo.svg" className="footer-logo" alt="" />
                    <h5 className="font-weight-normal mt-4 mb-5">
                      Newspaper is your news, entertainment, music fashion website. We
                      provide you with the latest breaking news and videos straight from
                      the entertainment industry.
                    </h5>
                    <ul className="social-media mb-3">
                      <li>
                        <a href="#">
                          <i className="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <h3 className="font-weight-bold mb-3">RECENT POSTS</h3>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="footer-border-bottom pb-2">
                          <div className="row">
                            <div className="col-3">
                              <img
                                src="assets/images/dashboard/home_1.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-9">
                              <h5 className="font-weight-600">
                                Cotton import from USA to soar was American traders
                                predict
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="col-sm-3">
                    <h3 className="font-weight-bold mb-3">CATEGORIES</h3>
                    <div className="footer-border-bottom pb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Magazine</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="footer-border-bottom pb-2 pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Business</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="footer-border-bottom pb-2 pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Sports</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="footer-border-bottom pb-2 pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Arts</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 font-weight-600">Politics</h5>
                        {/* <div className="count">1</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="fs-14 font-weight-600">
                        © 2020 @ info-for-nation. All rights reserved.
                      </div>
                      <div className="fs-14 font-weight-600">
                        Handcrafted by <a href="https://www.bootstrapdash.com/" target="_blank" className="text-white">BootstrapDash</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>

      <script src="assets/vendors/js/vendor.bundle.base.js"></script>

      <script src="assets/vendors/aos/dist/aos.js/aos.js"></script>

      <script src="./assets/js/demo.js"></script>
      <script src="./assets/js/jquery.easeScroll.js"></script>

    </body>
  );
}

export default NewsDashboard;



