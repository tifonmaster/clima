import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render(<App />)
serviceWorker.unregister();
// ReactDOM.render(<App />, document.getElementById('root'));
