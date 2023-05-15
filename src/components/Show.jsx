import axios from "axios"
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Show.css';

function Show() {
    const [snack, setSnack] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
        .then((res) => {
            setSnack(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    function handleDelete () {
        axios.delete(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
        .then(() => {
            navigate("/snacks");
        })
        .catch((error) => {
            console.log(error);
        });
    };

  return (
    <div className="show-container">
        <section className="rules">
            <p>Healthy snacks are determined by ❤️</p>
            <p>1. protein above 5 grams</p>
            <p>2. fiber above 5 grams</p>
            <p>3. sugar below 5 grams and sodium is below 140mg</p>
        </section>
        <div>
            <img src={snack.image} alt={snack.name}></img>
            <p><strong>Name: </strong>{snack.name}</p>
            <p><strong>Protein: </strong>{snack.protein}g</p>
            <p><strong>Fiber: </strong>{snack.fiber}g</p>
            <p><strong>Added Sugar: </strong>{snack.added_sugar}g</p>
            <p><strong>Sodium: </strong>{snack.sodium}mg</p>
            <p><strong>Favorite: </strong>{snack.is_favorite ? "⭐️" : "❌"}</p>
            <p>{(snack.protein > 5 || snack.fiber > 5 ) && (snack.added_sugar < 5 && snack.sodium < 140) ? "❤️" : "❤️‍🩹" }</p>
        </div>
        <section className="show-container-button">
            <button><Link to={"/snacks"}>Back</Link></button>
            <button><Link to={`/snacks/${id}/edit`}>Edit</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </section> 
    </div>
  )
}

export default Show