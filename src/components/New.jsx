import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './New.css';

function New() {
  const navigate = useNavigate();
  const submitNewSnack = (snackData) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/snacks`, snackData)
      .then(() => {
        console.log("here")
        navigate(`/snacks`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [snackData, setSnackData] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    image: "",
    sodium: "",
    is_favorite: false,
  });

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setSnackData({
      ...snackData,
      [e.target.name]: value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submitNewSnack(snackData);
  };

  return (
    <div className="snack-container">
       <form onSubmit={handleFormSubmit}>
  <label>
    Name:
    <input type="text" 
    name="name" 
    value={snackData.name} 
    onChange={handleInputChange} />
  </label>
  <label>
    Image URL:
    <input type="text" 
    name="image" 
    value={snackData.image} 
    onChange={handleInputChange} />
  </label>
  <label>
    Protein:
    <input type="number" 
    name="protein" 
    value={snackData.protein} 
    onChange={handleInputChange} />
  </label>
  <label>
    Fiber:
    <input type="number" 
    name="fiber" 
    value={snackData.fiber} 
    onChange={handleInputChange} />
  </label>
  <label>
    Added Sugar:
    <input type="number" 
    name="added_sugar" 
    value={snackData.added_sugar} 
    onChange={handleInputChange} />
  </label>
  <label>
    Sodium:
    <input type="number" 
    name="sodium" 
    value={snackData.sodium} 
    onChange={handleInputChange} />
  </label>
  <label>
    Favorite:
    <input type="checkbox" 
    name="is_favorite" 
    checked={snackData.is_favorite} 
    onChange={handleInputChange} />
  </label>
  <div className="newButton">
  <button type="submit">Submit</button>
    <Link to={`/`}>
      <button className="cancelNewSnack">Cancel</button>
    </Link>
  </div>
      </form>
    </div>
  );
}

export default New;
