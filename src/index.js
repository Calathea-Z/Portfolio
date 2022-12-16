import App from './App';
import './styles/index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

