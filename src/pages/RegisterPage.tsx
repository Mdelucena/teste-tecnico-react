import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name && email && password) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      
      navigate('/login');
    } else {
      alert('Preencha todos os campos');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cadastro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="E-mail"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar
        </Button>
        <Button variant="text" color="primary" fullWidth onClick={() => navigate('/login')}>
          Já tem uma conta? Faça login
        </Button>
      </form>
    </Container>
  );
};

export default RegisterPage;
