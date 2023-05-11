import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './New.css';

const New = () => {
  const [snack, setSnack] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
      .then(res => setSnack(res.data))
      .catch(err => console.log(err));
  }, [id]);
  
  return (
    <div className="snack-container">
    <div className="snack-details">
            <img src={snack.image} alt={snack.name}></img>
            <p>Name: {snack.name}</p>
            <p>Protein: {snack.protein}g</p>
            <p>Fiber: {snack.fiber}g</p>
            <p>Added Sugar: {snack.added_sugar}g</p>
            <p>Sodium: {snack.sodium}mg</p>
            <p>Favorite: {snack.is_favorite ? "⭐️" : null}</p>
    </div>
    </div>
  );
};

export default New