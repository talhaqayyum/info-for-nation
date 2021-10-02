import React from 'react'
// import './Map.css'
import { Link } from 'react-router-dom'
import './nicepage.css'
import './style.css'
export default function Map() {
    return (
        <div>
            
            <body className="u-body"><header className="u-clearfix u-custom-color-5 u-header u-sticky u-sticky-aa5c u-header" id="sec-d9fc"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <a href="https://nicepage.com" className="u-image u-logo u-image-1" data-image-width="80" data-image-height="40">
                    <img src="images/default-logo.png" className="u-logo-image u-logo-image-1" />
                </a>
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse" style={{ fontSize: "1rem", letterSpacing: "0px" }} >

                        <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                            <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use></svg>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" ><rect y="1" width="16" height="2" style={{ width: "16px", height: "16px" }} ></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>

                            </symbol>
                            </defs></svg>
                        </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                        <ul className="u-nav u-spacing-30 u-unstyled u-nav-1"><li className="u-nav-item"><a className="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white" style={{ padding: "10px 34px" }} > <Link to="/covid/Home">Home</Link></a>
                        </li><li className="u-nav-item"><a className="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white"  style={{ padding: "10px 34px" }}><Link to="/covid/Stats">Stats</Link></a>
                            </li><li className="u-nav-item"><a className="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white" style={{ padding: "10px 34px" }}><Link to="/covid/Map">Map</Link></a>
                            </li></ul>
                    </div>
                    <div className="u-custom-menu u-nav-container-collapse">
                        <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                            <div className="u-inner-container-layout u-sidenav-overflow">
                                <div className="u-menu-close"></div>
                                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Home.html" style={{ padding: "10px 34px" }}><Link to="/covid/Home">Home</Link></a>
                                </li><li className="u-nav-item"><a className="u-button-style u-nav-link"  style={{ padding: "10px 34px" }}><Link to="/covid/Stats">Stats</Link></a>
                                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link"  style={{ padding: "10px 34px" }}><Link to="/covid/Stats">Stats</Link></a>
                                    </li></ul>
                            </div>
                        </div>
                        <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                    </div>
                </nav>
            </div></header>
                <section className="u-clearfix u-section-1" id="sec-b16e">
                    <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-1">
                        <div className="u-container-layout u-container-layout-1"></div>
                    </div>
                </section>


                <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-161c"><div className="u-clearfix u-sheet u-sheet-1">
                    <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div></footer>
                <section className="u-backlink u-clearfix u-grey-80">
                    <a className="u-link" href="https://nicepage.com/website-templates" target="_blank">
                        <span>Website Templates</span>
                    </a>
                    <p className="u-text">
                        <span>created with</span>
                    </p>
                    <a className="u-link" href="https://nicepage.com/" target="_blank">
                        <span>Website Builder Software</span>
                    </a>.
                </section>
            </body>
        </div>
    )
}