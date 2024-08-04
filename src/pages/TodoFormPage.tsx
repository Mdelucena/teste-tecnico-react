import React, { useState, useEffect } from 'react';
import { Container, Button, List, ListItem, ListItemText, IconButton, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <Container>
      <h1>Lista de Atividades</h1>
      <Button component={Link} to="/todo/add" variant="contained" color="primary">
        Adicionar Atividade
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            component={Paper}
            style={{
              backgroundColor: todo.isImportant ? '#ffcccc' : '#ffffff',
              marginBottom: '8px',
              padding: '16px',
            }}
          >
            <ListItemText
              primary={todo.title}
              secondary={`Descrição: ${todo.description} | Data e Hora: ${todo.dateTime}`}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoListPage;
