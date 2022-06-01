import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Rating } from 'react-simple-star-rating'
import './MovieCard.css';
import { Link } from "react-router-dom";

const Movie = ({el }) => {

  return (
    <Card style={{ width: "25rem",backgroundColor:"linen" }} className='x'>
      <Card.Img variant="top" src={el.posterURL} className="car" style={{marginTop:"5px",marginRight:"3px"}}/>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <Rating
                iconsCount={5}
                ratingValue={el.rate*20}
                readonly={true}
                size={30}
                
            />   
             <Link to={`/movieDetails/${el.id}`}>
             <button className="card__btn">
              SEE TRAILER
                                </button></Link>  
              </Card.Body>
    </Card>
  );
};

export default Movie;