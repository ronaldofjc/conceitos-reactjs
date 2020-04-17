import React, { useState } from 'react';

import './App.css';
import img from './assets/background.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de Backend', 'Desenvolvimento de frontend']);

  function handleAddProject() {
    setProjects([ ...projects, `Novo projeto ${Date.now()}`]);  
  }

  return (
    <>
      <Header title="Projects" />

      <img width={500} src={img} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
        
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;