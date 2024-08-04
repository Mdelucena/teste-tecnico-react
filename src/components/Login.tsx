import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export {}; 

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Senha" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Entrar</Button>
      <Link to="/register">Cadastrar</Link>
    </Container>
  );
};

export default LoginPage;
