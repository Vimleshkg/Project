import React from 'react'
import {Card, Grid} from 'semantic-ui-react';
import './component.css';
import { CiMenuKebab } from "react-icons/ci";

export default function Species({data}) {
  return (
    <div className="MenuElem"><h1>Species</h1>
    <Grid columns={3} className="">
   {data.map((species, i )=>
   {
     return(
  
       <Grid.Column key={i} className="CardGrid">

<Card className="CardMain" >
 <Card.Content >
   <Card.Header>{species.name}</Card.Header>
   <Card.Description className="CardDesc">
     <strong>Classification</strong>
     <p>{species.classification}</p>

     <strong>Average Lifespan</strong>
     <p>{species.average_lifespan}</p>

     <strong>Language</strong>
     <p>{species.language}</p>


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
