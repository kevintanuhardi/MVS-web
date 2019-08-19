import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


// COMPONENTS
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Footer from './Components/Footer';

// VIEWS
import Index from './Views/index';
import Product from './Views/Product';

const Test = (test) => {
  return (
    <div style={{height: "500px"}}>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Header />

        <Route path="/" exact component={Index} />
        <Route path="/products" exact component={Product} />
        <Route path={`/products/:productId`} component={Test} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
