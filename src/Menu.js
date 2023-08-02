import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import './App.css'
import {AiFillFolder} from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const Menu=()=>
{

        return(
<div className="menu">
<Link to="/films">
    <div className="menuList"  >
    <h1 id="cl"> <AiFillFolder/> Films  <span><BiChevronRight/></span></h1>
    </div>
    </Link>

    <Link to="/people">
        <div  className="menuList"   >
    <h1> <AiFillFolder/> People <span><BiChevronRight/></span></h1>
    </div>  
    </Link>

    <Link to="/planets">
    <div className="menuList"  tag="a" href="#" >
    <h1><AiFillFolder/> Planets <span><BiChevronRight/></span></h1>
    </div>
</Link>

<Link to="/species">
    <div className="menuList"  tag="a" href="#" >
    <h1> <AiFillFolder/>Species <span><BiChevronRight/></span></h1>
    </div>
    </Link>

    <Link to="/starships">
    <div className="menuList"  tag="a" href="#" >
    <h1><AiFillFolder/> StarShips <span ><BiChevronRight /></span></h1>
    </div>
</Link>

<Link to="/vehicles">
    <div className="menuList"  tag="a" href="#" >
    <h1> <AiFillFolder/> Vehicles <span><BiChevronRight/></span></h1>
    </div>
    </Link>
    
</div>
    
        )
}
export default Menu;