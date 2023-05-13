import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    image: '',
    protein: '',
    fiber: '', 
    added_sugar: '', 
    sodium: '', 
    is_favorite: false });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
        .then(res => setFormData(res.data))
        .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.put(`${process.env.REACT_APP_API_URL}/snacks/${id}`, formData)
        .then(() => navigate(`/snacks/${id}`))
        .catch((err) => console.log(err));
  };

  return (
    <div className="editDiv">
    <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" 
    name="name" 
    value={formData.name} 
    onChange={handleChange} />
  </label>
  <label>
    Image URL:
    <input type="text"
    name="image" 
    value={formData.image} 
    onChange={handleChange} />
  </label>
  <label>
    Protein:
    <input type="text" 
    name="protein" 
    value={formData.protein} 
    onChange={handleChange} />
  </label>
  <label>
    Fiber:
    <input type="text" 
    name="fiber" 
    value={formData.fiber} 
    onChange={handleChange} />
  </label>
  <label>
    Added Sugar:
    <input type="text" 
    name="added_sugar" 
    value={formData.added_sugar} 
    onChange={handleChange} />
  </label>
  <label>
    Sodium:
    <input type="text" 
    name="sodium" 
    value={formData.sodium} 
    onChange={handleChange} />
  </label>
  <label>
    Favorite:
    <input type="checkbox" 
    name="is_favorite" 
    checked={formData.is_favorite} 
    onChange={handleChange} />
  </label>
  <button type="submit">Edit</button>
</form>
</div>
  );
};

export default Edit