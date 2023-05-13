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
    is_healthy: false,
  });

  const handleInputChange = (event) => {
    setSnackData({ ...snackData, [event.target.id]: event.target.value });
  };

  const toggleHealthyStatus = () => {
    setSnackData({ ...snackData, is_healthy: !snackData.is_healthy });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submitNewSnack(snackData);
  };

  return (
    <div className="addNewSnack">
       <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" value={formData.name} onChange={handleChange} />
  </label>
  <label>
    Image URL:
    <input type="text" name="image" value={formData.image} onChange={handleChange} />
  </label>
  <label>
    Protein:
    <input type="text" name="protein" value={formData.protein} onChange={handleChange} />
  </label>
  <label>
    Fiber:
    <input type="text" name="fiber" value={formData.fiber} onChange={handleChange} />
  </label>
  <label>
    Added Sugar:
    <input type="text" name="added_sugar" value={formData.added_sugar} onChange={handleChange} />
  </label>
  <label>
    Sodium:
    <input type="text" name="sodium" value={formData.sodium} onChange={handleChange} />
  </label>
  <label>
    Favorite:
    <input type="checkbox" name="is_favorite" checked={formData.is_favorite} onChange={handleChange} />
  </label>
  <button type="submit">{edit ? 'Update Snack' : 'Add Snack'}</button>
        <br />
        <input className="submitNewSnack" type="submit" />
        <Link to={`/`}>
          <button className="cancelNewSnack">Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default New;
