import React from 'react';

function Footer(props) {
    return(
        <footer className="o-footer" role="contentinfo">
            <div className="o-footer-body">
                <div className="container-fluid">
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link" href="mailto:etienne.blanc@orange.com">Remonter un problème ou une suggestion d'amélioration</a></li>

                    </ul>
                </div>
            </div>
            <div className="o-footer-bottom">
                <div className="container-fluid">
                    <ul className="nav">
                        <li className="nav-item"><span className="nav-link">© Orange 2018-2019</span></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default Footer;