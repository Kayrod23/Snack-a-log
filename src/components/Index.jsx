import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

function Index() {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/snacks`)
        .then((res) => {
            setSnacks(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <div className="index-container">
        <section className="data">
        {snacks ? snacks.map((snack, index) => 
            <Link key={index} to={`/snacks/${snack.id}`}>
                <div>
                    <div className="indexCard">
                        <img src={snack.image} alt={snack.name}/>
                        <h3>{(snack.protein > 5 || snack.fiber > 5 ) && (snack.added_sugar < 5 && snack.sodium < 140) ? "❤️" : "❤️‍🩹" } {snack.name}</h3>
                    </div>
                </div>
            </Link>
        ) : null}
        </section>
    </div>
  )
}

export default Index