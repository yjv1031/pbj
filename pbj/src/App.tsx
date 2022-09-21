import './App.css';
import Main from './pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);

export default App;
