import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Cadastro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar
        </Button>
        <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default RegisterPage;
