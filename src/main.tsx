import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route, NavLink } from "react-router";

import './index.css'
import App from './App'
import RandomApp from './random/RandomApp';
import ProductsApp from './ProductsApp'
import TodoListComponent from './TodoList'
import UsersList from './Users';
import HomePage from './pages/HomePage';
import Wordle from './components/wordle/Wordle';
import Contacts from './components/contacts/Contacts';

const rootElement = document.getElementById('root');

if (rootElement) {
  const node = <StrictMode>
      <BrowserRouter>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/game">Game</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/wordle">Wordle</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/random">Random</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<App />} />
          <Route path="/todo" element={<TodoListComponent />} />
          <Route path="/products" element={<ProductsApp />} />
          <Route path="/random" element={<RandomApp />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/users" element={
            <Provider store={store}>
              <UsersList />
            </Provider>
          } />
        </Routes>
      </BrowserRouter>
    </StrictMode>;

    console.log(node);
    const root = createRoot(rootElement);
    console.log(root);
    root.render(node)
}
