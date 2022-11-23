import React from 'react';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext"
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')); 
root.render(
    <AuthContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </AuthContextProvider>
);
