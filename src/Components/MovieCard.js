import React from 'react'
import {Card} from 'react-bootstrap';
import {Rating} from '@material-ui/lab'
import {Link} from "react-router-dom"

export const MovieCard = ({movie}) => {
  return (
     
        <div style={{ marginTop:"50px"}}>

  <Card style={{ width: '18rem', height:"500px"}}>
  <Card.Img variant="top" src={movie.image} style={{ width:'auto', height:'40%'}} />
  <Card.Body style={{textAlign:"center" ,fontSize:"18px"}}>
  
  <Link to={`/Trailer/${movie.id}`}><Card.Title>{movie.name}</Card.Title></Link>
     <Card.Text> {movie.title} </Card.Text>
    <Card.Text> {movie.date} </Card.Text>
    <Card.Text> {movie.type} </Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly/>    
  </Card.Body>
</Card>
        </div>
    )
}
