import React from 'react'
import {Card, Grid} from 'semantic-ui-react';
import { CiMenuKebab } from "react-icons/ci";

export default function StarShips({data}) {
  return (
    <div className="MenuElem"> 
    <h1>StarShips</h1>
      <Grid columns={3} className="">
    {data.map((starships, i )=>
    {
      return(
   
        <Grid.Column key={i} className="CardGrid">
 
 <Card className="CardMain" >
  <Card.Content >
    <Card.Header>{starships.name}</Card.Header>
    <Card.Description className="CardDesc">
      <strong>Model</strong>
      <p>{starships.model}</p>
 
      <strong>Length</strong>
      <p>{starships.length}</p>
 
      <strong>Max Atmosphering Speed</strong>
      <p>{starships.max_atmosphering_speed}</p>
 
 
    </Card.Description>
    
  </Card.Content>
  <div className="cardDescM">
  <span><CiMenuKebab className="cimenu" /></span>

  </div>
  
 </Card>
 
        </Grid.Column>
        
      
      )
      })}
 
    </Grid>
    </div>
  )
}
