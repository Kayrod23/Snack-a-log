import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import './Edit.css';

const Edit = ({ edit = false }) => {
  const [formData, setFormData] = useState({ name: '', image: '', protein: '', fiber: '', added_sugar: '', sodium: '', is_favorite: false });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (edit) {
      axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
        .then(res => setFormData(res.data))
        .catch(err => console.log(err));
    }
  }, [edit, id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      axios.put(`${process.env.REACT_APP_API_URL}/snacks/${id}`, formData)
        .then(res => history.push(`/snacks/${id}`))
        .catch(err => console.log(err));
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/snacks/${id}`, formData)
        .then(res => history.push(`/snacks/${res.data.id}`))
        .catch(err => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="snack-form">
      {/* not sure what to put in this return section here */}
      <button type="submit">{edit ? 'Update Snack' : 'Add Snack'}</button>
    </form>
  );
};

export default Edit