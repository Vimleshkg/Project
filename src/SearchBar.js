import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './App.css'
import axios from"axios";
import { useEffect, useState } from 'react';
import { SearchResults }  from './SearchResults';

export default function SearchBar({  }) {

    const [input, setInput]=useState([]);
    const [search, setSearch]=useState("")

    

   useEffect(()=>{
    
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=500")
    .then((response)=>{setInput(response.data.results)})

   },[]);

    
    

  return (
   <>
    
    <FaSearch id="search-icon"/>
    <input placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/> 

    <div className="ElemList"> 
    {
        input.filter((item)=>
        {
            if(search===""){
                return ""
            }
            else if(item.name.toLowerCase().includes(search.toLowerCase())){
               return item 
            }
        })
        .map((item,i)=>{
            return <SearchResults item={item.name} key={i}/>
        })
    }
 
  </div>

  </>
  
  )
}
