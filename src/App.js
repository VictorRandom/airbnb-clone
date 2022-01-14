import React from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
      img="./image1.png"
      rating="5.0"
      reviewCount="(6)"
      title="Life lessons with Katie Zaferes"
      price="From $136"
      />
    </div>
  );
}

export default App;