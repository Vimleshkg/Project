import react from 'react';
import {Card, Grid} from 'semantic-ui-react';
import { Container, Button } from 'reactstrap';
import { CiMenuKebab } from "react-icons/ci";
import { RiMovie2Fill } from "react-icons/ri";
import play from './play.jpg';
import { useState, useEffect} from 'react';

const Films=({data})=>
{
  const purple="#FF0000";
const [Bg, setBg] =useState(purple);
const bgChange=()=>{

  let newBg="#000";
  setBg(newBg);
}

    return(
        <div className="MenuElem">
  
     <h1>Films</h1>
     <Grid columns={3} className="GridFilm">
    {data.map((films, i )=>
    {
      return(
   
        <Grid.Column key={i} className="CardGrid">

<Card className="CardMain" >

  <Card.Content  >

    <Card.Header>{films.title}</Card.Header>
    <Card.Description className="CardDesc">
    <div> <img src={play} /> </div>
      <strong>EpisodeId</strong>
      <p>{films.episode_id}</p>

      <strong>Director</strong>
      <p>{films.director}</p>

      <strong>ReleaseDate</strong>
      <p>{films.release_date}</p>


    </Card.Description>
    
  </Card.Content>
  
  <div className="cardDescM" style={{ backgroundColor: Bg}}  >
    <div id="m" >
  <span className="riMovie"><RiMovie2Fill/></span>
    <Button onClick={bgChange} ><span id="riMovie"><CiMenuKebab className="cimenu" /></span></Button>
  </div>
  </div>
</Card>

        </Grid.Column>
        
      
      )
      })}

    </Grid>
  


        </div>
    );
}
export default Films;

