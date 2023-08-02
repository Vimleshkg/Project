import React from 'react'
import {Card, Grid} from 'semantic-ui-react';
import { CiMenuKebab } from "react-icons/ci";

export default function Vehicles({data}) {
  return (
    <div className="MenuElem">
      <h1>Vehicles</h1>
      <Grid columns={3} className="">
    {data.map((vehicles, i )=>
    {
      return(
   
        <Grid.Column key={i} className="CardGrid">
 
 <Card className="CardMain" >
  <Card.Content >
    <Card.Header>{vehicles.name}</Card.Header>
    <Card.Description className="CardDesc">
      <strong>Model</strong>
      <p>{vehicles.model}</p>
 
      <strong>Length</strong>
      <p>{vehicles.length}</p>
 
      <strong>Max Atmosphering Speed</strong>
      <p>{vehicles.max_atmosphering_speed}</p>
 
 
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
