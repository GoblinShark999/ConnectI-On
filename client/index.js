import React from 'react';
import { render } from 'react-dom'
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router-dom';

import styling from './stylesheets/styling.scss' //client/stylesheets/styling.scss

render(
    <App />,
    document.getElementById('root')
);