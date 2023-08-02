import React from 'react';
import {Card, Grid} from 'semantic-ui-react';
import './component.css';
import { CiMenuKebab } from "react-icons/ci";


export default function People({data}) {
  return (
    <div className="MenuElem">
    <h1 >People</h1>
    <Grid columns={3}>
    {data.map((people, i )=>
    {
      return(
   
        <Grid.Column key={i} className="CardGrid">

<Card className="CardMain" >
  <Card.Content >
    <Card.Header>{people.name}</Card.Header>
    <Card.Description className="CardDesc">
      <strong>Height</strong>
      <p>{people.height}</p>

      <strong>Mass</strong>
      <p>{people.mass}</p>

      <strong>Hair Color</strong>
      <p>{people.hair_color}</p>


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
