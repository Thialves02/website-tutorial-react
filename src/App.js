import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path='/services' component={Services} />
        <Route path="/products" component={Products}/>         
        <Route path="/sign-up" component={SignUp}/> 
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
