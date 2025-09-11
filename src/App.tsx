import React, { useState, useEffect, Suspense } from 'react';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';

function App() {
  return (
    <div className="App">
      <ProjectsSection />
      <ResumeSection />
    </div>
  );
}

export default App;
