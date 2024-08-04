import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoListPage from './pages/TodoListPage';
import TodoFormPage from './pages/TodoFormPage';
import PrivateRoute from './components/PrivateRoute';
import EditTodoPage from './pages/EditTodoPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} /> {}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/todo" element={<TodoListPage />} />
        <Route path="/todo/edit/:index" element={<EditTodoPage />} />
        <Route path="/todo/:id" element={<TodoFormPage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;