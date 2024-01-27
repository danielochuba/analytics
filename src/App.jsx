import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar.jsx';
import MetricCard from './components/MetricCard';

function App() {
  return (
    <>
      <Navbar />
      <MetricCard />
    </>
  );
}

export default App;
