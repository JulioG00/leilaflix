import React from 'react';
import {Link } from 'react-router-dom';
import Logo from '../../imagem/Logo.png';
import './menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
         <nav className="Menu">
             <Link to="/">
                <img className="Logo" src={Logo} alt="topflix logo"/>
             </Link>

            <Button as={Link} className="Buttonlink" to ="/cadastro/video">   
              Novo video              
            </Button>

        </nav>
    );
}


export default Menu; 