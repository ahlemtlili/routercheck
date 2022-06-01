import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './details.css';

const MovieDetails = ({movies}) => {
    const {id}=useParams()
    const [mov, setMov] = useState("")
  useEffect(() => {
     setMov(movies.find(el=> el.id==id))
   }, [id])
   
  return (
    <div className="card">
    <div className="card__image card__image--fence" />
    <iframe width="1580" height="460" src={mov.trailer}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    <div className="card__content">
  
      <div className="card__title">{mov.title}</div>
      <p className="card__text">
       {mov.description}{" "}
      </p>
     <center> <Link to="/" > <button className="btn btn--block card__btn">
              Go Back
                                </button></Link></center>
    </div>
  </div>

  )
}

export default MovieDetails