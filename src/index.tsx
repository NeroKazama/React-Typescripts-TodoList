import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app"

const element = document.getElementById('app-root')!
const root = ReactDOM.createRoot(element);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
