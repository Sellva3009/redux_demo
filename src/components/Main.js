import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHello, remove, update } from '../redux/userSlice';

const Main = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const [formData, setFormData] = useState({ name: '', email: '' });

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(addHello(formData));
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove());
  }

  return (
    <div className="main">
      Hi {user.name}
      <button onClick={handleDelete}>Delete Account</button>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder={user.name}
          name="name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder={user.email}
          name="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}

export default Main