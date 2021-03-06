import React from 'react';
import '../App.css';

const Footer = (props) => {
    return(
        <div className="container-fluid p-0">
            <footer className="site-footer">
                <div className="container p-0">
                    <div className="row mr-auto">
                        <div className="col-sm-12 col-md-6">
                            <p className="text-justify"><h4>Movie City</h4>  No video file is hosted on Movie City,
                            all the files are uploaded by non affiliated uploaders on file-sharing hosts.
                            <br /><br />FREE MOVIES WATCH MOVIES ONLINE FREE FREE MOVIES ONLINE WATCH FULL MOVIES
                            ONLINE FREE ONLINE MOVIES FULL WATCH MOVIES 123Movies </p>
                        </div>
                        
                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="/">Drama</a></li>
                                <li><a href="/">UI Design</a></li>
                                <li><a href="/">PHP</a></li>
                                <li><a href="/">Java</a></li>
                                <li><a href="/">Android</a></li>
                                <li><a href="/">Templates</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Contribute</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container p-0">
                    <div className="row mr-auto">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="/"> Scanfcode</a>.
                            </p>
                        </div>
                        
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="/"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;