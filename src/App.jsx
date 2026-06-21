import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HydronixCaseStudy from './pages/HydronixCaseStudy';
import AiCoachCaseStudy from './pages/AiCoachCaseStudy';
import CalculatorCaseStudy from './pages/CalculatorCaseStudy';
import NewflexCaseStudy from './pages/NewflexCaseStudy';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/hydronix" element={<HydronixCaseStudy />} />
        <Route path="/case-study/ai-coach" element={<AiCoachCaseStudy />} />
        <Route path="/case-study/calculator" element={<CalculatorCaseStudy />} />
        <Route path="/case-study/newflex" element={<NewflexCaseStudy />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
