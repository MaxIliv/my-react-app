import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route, NavLink } from "react-router";

import './index.css'
import App from './App.js'
import ProductsApp from './ProductsApp'
import TodoListComponent from './TodoList'
import UsersList from './Users';
import HomePage from './pages/HomePage';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/game">Game</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<App />} />
          <Route path="/todo" element={<TodoListComponent />} />
          <Route path="/products" element={<ProductsApp />} />
          <Route path="/users" element={
            <Provider store={store}>
              <UsersList />
            </Provider>
          } />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
}
