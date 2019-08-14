import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


// COMPONENTS
import TopBar from './Components/TopBar'
import Header from './Components/Header'
import Footer from './Components/Footer'

// VIEWS
import Index from './Views/index'


const Products = () => (
  <h2>Produk</h2>
)

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Header />

        <Route path="/" exact component={Index} />
        <Route path="/products" exact component={Products} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
