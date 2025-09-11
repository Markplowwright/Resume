import React, { useState, useEffect, Suspense } from 'react';
import ProjectsSection from './ProjectsSection';
import ResumeSection from './ResumeSection';

function App() {
  return (
    <div className="App">
      <ProjectsSection />
      <ResumeSection />
    </div>
  );
}

export default App;