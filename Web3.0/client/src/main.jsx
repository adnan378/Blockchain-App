import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import { TransactionsProvider } from './context/TransactionContext';

createRoot(document.getElementById('root')).render(
  <TransactionsProvider> 
      <React.StrictMode>
         <App />
      </React.StrictMode>
  </TransactionsProvider>
  
);
