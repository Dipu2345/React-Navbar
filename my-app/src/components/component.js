import React from 'react';
import { FaFacebook ,FaInstagramSquare,FaLinkedin ,FaGitSquare} from 'react-icons/fa';
import './component.css';
function Compo(){

    return(
        <div>
      <div className="main">
         
            < p className='logo'>Debashis </p>
            <ul className='ul'>
                <li>Home</li>
                <li>Portfolio</li>
                <li>contact</li>
            </ul>
             
           <div className='social'>
            <li>
                <a href='#'><FaGitSquare/></a>
            </li>
            
            <li>
                <a href='#'><FaLinkedin/></a>
            </li>
           
               
            
           </div>

            </div>
            <section className='hero'>
                 <h1>Debashis</h1>
                 <p>Panda</p>
            </section>
            </div>
        
      
      
    );
}
export default Compo;