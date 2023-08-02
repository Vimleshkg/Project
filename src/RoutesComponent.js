import React from 'react';
import './App.css';
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './component/Dashboard';
import Films from './component/Films';
import People from './component/People';
import Planets from './component/Planets';
import Species from './component/Species';
import StarShips from './component/StarShips';
import Vehicles from './component/Vehicles';
import { useState, useEffect, Component } from 'react';

export const RoutesComponent = () => {


    const [films, setFilms]=useState([]);
    const [people, setPeople]=useState([]);
    const [planets, setPlanets]=useState([]);
    const [species, setSpecies]=useState([]);
    const [starships, setStarships]=useState([]);
    const [vehicles, setVehicles]=useState([]);
  
  
  
    useEffect(()=>
    {
      async function fetchFilms(){
        let res= await fetch('https://swapi.dev/api/films/?format=json');
        let data=await res.json();
        setFilms(data.results);
  
  
     
       }
  
   async function fetchPeople(){
    let res=await fetch('https://swapi.dev/api/people/?format=json');
    let data= await res.json();
    setPeople(data.results);
   }
  
   async function fetchPlanets(){
    let res= await fetch('https://swapi.dev/api/planets/?format=json');
    let data=await res.json();
    setPlanets(data.results);
  
   }
  
   async function fetchSpecies(){
    let res= await fetch('https://swapi.dev/api/species/?format=json');
    let data=await res.json();
    setSpecies(data.results);
  
   }
  
  async function fetchStarships(){
  let res=await fetch('https://swapi.dev/api/starships/?format=json');
  let data= await res.json();
  setStarships(data.results);
  }
  
  async function fetchVehicles(){
  let res= await fetch('https://swapi.dev/api/vehicles/?format=json');
  let data=await res.json();
  setVehicles(data.results);
  
  }
  
  fetchFilms();
   fetchPeople();
   fetchPlanets();
   fetchSpecies();
   fetchStarships();
   fetchVehicles();
  
  
    }, []);
  
  
  


  return (
    <div>
        <Container className="mainBody">
              
              <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/films" element={<Films data={films}/>}/>
              <Route exact path="/people" element={<People data={people}/>}/>
              <Route exact path="/planets" element={<Planets data={planets}/>}/>
              <Route exact path="/species" element={<Species data={species}/>}/>
              <Route exact path="/starships" element={<StarShips data={starships}/>}/>
              <Route exact path="/vehicles" element={<Vehicles data={vehicles}/>}/>
              
            </Routes>
           
          </Container>
    </div>
  )
}
