import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Layout } from './components/index';
import Global from './styles/Global';

function App() {
  return (
    <div className="App">
      <Global />
      <Layout></Layout>
    </div>
  );
}

export default App;
