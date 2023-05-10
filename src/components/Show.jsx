import axios from "axios"
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

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
    }, []);

    function handleDelete () {
        axios.delete(`${process.env.REACT_APP_API_URL}/songs/${id}`)
        .then(() => {
            navigate("/snacks");
        });
    };

  return (
    <div>
        <div>
            <img src={snack.image} alt={snack.name}></img>
            <p>Name: {snack.name}</p>
            <p>Protein: {snack.protein}g</p>
            <p>Fiber: {snack.fiber}g</p>
            <p>Added Sugar: {snack.added_sugar}g</p>
            <p>Sodium: {snack.sodium}mg</p>
            <p>Favorite: {snack.is_favorite ? "⭐️" : null}</p>
        </div>
        <div>
            <button><Link to={"/snacks"}>Back</Link></button>
            <button><Link to={`/snacks/${id}`}>Edit</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Show