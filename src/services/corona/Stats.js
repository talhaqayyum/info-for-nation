import React from 'react'
import './Stats.css'
import { Link } from 'react-router-dom'
import './nicepage.css'
import './style.css'
export default function Stats() {
    return (
        <div>

            <body className="u-body u-grey-10"><header className="u-clearfix u-custom-color-5 u-header u-sticky u-sticky-aa5c u-header" id="sec-d9fc"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <a href="https://nicepage.com" className="u-image u-logo u-image-1" data-image-width="80" data-image-height="40">
                    <img src="images/default-logo.png" className="u-logo-image u-logo-image-1" />
                </a>
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse" >
                        <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                            <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use></svg>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" ><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
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
                <section className="u-align-center u-clearfix u-section-1" id="sec-9870">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-expanded-width-xs u-list u-list-1">
                            <div className="u-repeater u-repeater-1">
                                <div className="u-container-style u-list-item u-repeater-item">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-1">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-2">
                                                <h3 className="u-align-center u-text u-text-1"><span className="u-icon"></span>&nbsp;Con<span ></span>firmed<br></br>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-list-item u-repeater-item">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-2">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-4">
                                                <h3 className="u-align-center u-text u-text-default u-text-2">Active</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-list-item u-repeater-item">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-3">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-6">
                                                <h3 className="u-align-center u-text u-text-default u-text-3">Recovered</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-list-item u-repeater-item">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                                        <div className="u-align-center u-container-style u-custom-color-1 u-group u-radius-15 u-shape-round u-group-4">
                                            <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-8">
                                                <h3 className="u-align-center u-text u-text-default u-text-4">Deaths</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                                        <div className="u-container-layout u-container-layout-9">
                                            <ul className="u-custom-list u-text u-text-5">
                                                <li>
                                                    <div className="u-list-icon u-list-icon-1">
                                                        <svg className="u-svg-content" viewBox="0 0 512.008 512.008" id="svg-5422"><path d="m507.904 245.317-163.296-181.408c-2.848-3.168-6.848-5.056-11.072-5.28-4.352-.288-8.384 1.248-11.552 4.096l-47.552 42.784c-6.56 5.92-7.072 16.032-1.184 22.592l71.904 79.904h-329.152c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16h329.152l-71.904 79.872c-5.92 6.592-5.376 16.672 1.184 22.624l47.552 42.816c3.072 2.752 6.912 4.096 10.72 4.096 4.384 0 8.704-1.792 11.904-5.28l163.296-181.408c5.472-6.08 5.472-15.328 0-21.408z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <span >Sample Item 1</span>
                                                </li>
                                                <li>
                                                    <div className="u-list-icon u-list-icon-2">
                                                        <svg className="u-svg-content" viewBox="0 0 512.008 512.008" id="svg-5422"><path d="m507.904 245.317-163.296-181.408c-2.848-3.168-6.848-5.056-11.072-5.28-4.352-.288-8.384 1.248-11.552 4.096l-47.552 42.784c-6.56 5.92-7.072 16.032-1.184 22.592l71.904 79.904h-329.152c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16h329.152l-71.904 79.872c-5.92 6.592-5.376 16.672 1.184 22.624l47.552 42.816c3.072 2.752 6.912 4.096 10.72 4.096 4.384 0 8.704-1.792 11.904-5.28l163.296-181.408c5.472-6.08 5.472-15.328 0-21.408z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <span >Sample Ite​m 2</span>
                                                </li>
                                                <li>
                                                    <div className="u-list-icon u-list-icon-3">
                                                        <svg className="u-svg-content" viewBox="0 0 512.008 512.008" id="svg-5422"><path d="m507.904 245.317-163.296-181.408c-2.848-3.168-6.848-5.056-11.072-5.28-4.352-.288-8.384 1.248-11.552 4.096l-47.552 42.784c-6.56 5.92-7.072 16.032-1.184 22.592l71.904 79.904h-329.152c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16h329.152l-71.904 79.872c-5.92 6.592-5.376 16.672 1.184 22.624l47.552 42.816c3.072 2.752 6.912 4.096 10.72 4.096 4.384 0 8.704-1.792 11.904-5.28l163.296-181.408c5.472-6.08 5.472-15.328 0-21.408z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <span >Sample Item 3</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                                        <div className="u-container-layout u-container-layout-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-clearfix u-section-2" id="sec-ef58">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-1">
                            <div className="u-container-layout u-container-layout-1"></div>
                        </div>
                    </div>
                </section>
                <section className="u-clearfix u-section-3" id="sec-d2f1">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-1">
                            <div className="u-container-layout u-container-layout-1"></div>
                        </div>
                    </div>
                </section>


                <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-161c"><div className="u-clearfix u-sheet u-sheet-1">
                    <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div></footer>
                <section className="u-backlink u-clearfix u-grey-80">
                    <a className="u-link" href="https://nicepage.com/website-design" target="_blank">
                        <span>Free Website Design</span>
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