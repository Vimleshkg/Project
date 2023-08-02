import React from 'react'
import {Card, Grid} from 'semantic-ui-react';
import './component.css';
import { CiMenuKebab } from "react-icons/ci";

export default function ({data}) {
  return (
    <div className="MenuElem">
      <h1 >Planets</h1>
    <Grid columns={3}>
    {data.map((planets, i )=>
    {
      return(
   
        <Grid.Column key={i} className="CardGrid">

<Card className="CardMain" >
  <Card.Content >
    <Card.Header>{planets.name}</Card.Header>
    <Card.Description className="CardDesc">
      <strong>Diameter</strong>
      <p>{planets.diameter}</p>

      <strong>Climate</strong>
      <p>{planets.climate}</p>

      <strong>Gravity</strong>
      <p>{planets.gravity}</p>


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
