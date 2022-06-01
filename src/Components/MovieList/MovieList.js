import React from 'react'
import Movie from '../MovieCard/MovieCard'

const MovieList = ({movieData}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly",flexWrap:"wrap",background:"linon" }}>
      {movieData.map((el,i)=><Movie key={i} el={el} />)}


    </div>
  )
}

export default MovieList
