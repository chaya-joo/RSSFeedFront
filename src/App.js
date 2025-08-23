import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FeedNewsPage } from './Components/FeedNewsPage';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<FeedNewsPage />} />
    </Routes>
  </Router>
);}

export default App;
