import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css'
import App from './App.js'
import ProductsApp from './ProductsApp'
import TodoListComponent from './TodoList'
import UsersList from './Users';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
      <ProductsApp />
      <TodoListComponent />
      <Provider store={store}>
        <UsersList />
      </Provider>
    </StrictMode>,
  )
}
