import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// import styling from './stylesheets/styling.scss'; //client/stylesheets/styling.scss

// render(
//     <App />,
//     document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);