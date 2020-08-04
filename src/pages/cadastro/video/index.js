import React from 'react';
import PageDefault from '../../../components/Pagedefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
   return(
       <PageDefault>
           <h1> cadastro de video</h1>

           <Link to="/cadastro/categoria">
                Cadastrar Categoria
           </Link>
       </PageDefault>
   )

}


export default CadastroVideo;