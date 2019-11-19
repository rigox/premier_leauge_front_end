import React from 'react';
import  {Link , NavLink} from 'react-router-dom';


const Navbar =()=>{
        
     return(
        <nav id="navbar">
        <div class="container">
    
       
        <h1>
          <Link to="/"><i className="far fa-futbol"></i>Premier Leauge</Link>
        </h1>
        <ul>
        <li><NavLink  to="/standings">Standings</NavLink></li>
        <li><NavLink  to="/admin">Admin</NavLink></li>
        <li><NavLink  to="/">Login</NavLink></li>
      </ul>
      </div>
      </nav>
     )
}

export default  Navbar;