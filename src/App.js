import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import ResultLayout from './layouts/HomeLayout';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={HomeLayout} />
        <Route path="/result" component={ResultLayout} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
