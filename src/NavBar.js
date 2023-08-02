import React, {useState} from 'react';
import myimg from './img/star.png';
import starwars from './star-wars.jpg';
import './App.css';
import {Link} from 'react-router-dom';

import  SearchBar from './SearchBar';

const NavBar=({data})=>
{
const [result, setResults]=useState("");

   return(
     <div className="navB">

<nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
  
  <Link to="/">
  <a className="navbar-brand" href="#">

        <img src={myimg} alt="React Image" />
  
  </a>
  </Link>
  <div class="SearchB">
    <div className="search-bar-container">
   <SearchBar />
   </div>
   
   </div>
 
</nav>

    </div>
   )
}
export default NavBar;