import React from 'react';
import orange_logo from 'boosted/dist/img/orange_logo.svg';

// TODO: Centrer le texte du header

function Header(props) {
    return(
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <p className="navbar-brand" href="#">
                        <img src={orange_logo} className="d-inline-block align-top" alt=""/>
                        Outil d'affichage des comptes verrouillés
                    </p>
                </nav>
            </header>
        </div>
    )
};

export default Header;