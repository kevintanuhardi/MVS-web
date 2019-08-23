import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


// COMPONENTS
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Footer from './Components/Footer';

// VIEWS
import Home from './Views/Home';
import Product from './Views/Product';
import News from './Views/News';
import ProductDetail from './Views/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/products" exact component={Product} />
        <Route path={`/products/:productId`} component={ProductDetail} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
