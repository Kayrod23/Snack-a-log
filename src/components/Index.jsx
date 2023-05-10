import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
        <h1>Snacks</h1>
        {snacks ? snacks.map((snack, index) => 
            <Link key={index} to={`/snacks/${snack.id}`}>
                <div>
                    <img src={snack.image} alt={snack.name}/>
                    <h3>{snack.name}</h3>
                </div>
            </Link>
        ) : null}
    </div>
  )
}

export default Index