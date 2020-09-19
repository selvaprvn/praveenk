import React from 'react';
import './Footer.scss';

const Footer = ({ data }) => {
    const { social, name } = data || {};
    var networks = social && social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
    return (
        <footer>

            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright {new Date().getFullYear()} {name}</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>

                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="fa fa-angle-up">
                        </i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
