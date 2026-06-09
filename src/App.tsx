import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-4 py-5 px-2">
      <Header />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;