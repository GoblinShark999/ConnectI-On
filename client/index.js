import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

//websockets
import { io } from 'socket.io-client';

const socket = io();

// if (window.location.pathname === '/') socket = io.connect() // http://${window.location.hostname}:3000



// import styling from './stylesheets/styling.scss'; //client/stylesheets/styling.scss

// render(
//     <App />,
//     document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);