import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="xs" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        ToDo's Web <br/> Sistema de Task
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        style={{ margin: '10px' }}
        component={Link} 
        to="/login"
      >
        Login
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        style={{ margin: '10px' }}
        component={Link} 
        to="/register"
      >
        Cadastro
      </Button>
    </Container>
  );
};

export default HomePage;
