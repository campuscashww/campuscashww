/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './app/page';
import QuizPage from './app/quiz/page';
import DashboardPage from './app/dashboard/page';
import BridgePage from './app/bridge/page';
import AdminPage from './app/admin/page';
import { useQuizStore } from './lib/quizState';

function AppContent() {
  const setTrackingParams = useQuizStore((state) => state.setTrackingParams);

  useEffect(() => {
    // Parse all URL query parameters and store them in Zustand
    const params = new URLSearchParams(window.location.search);
    const paramsObj: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
      paramsObj[key] = value;
    }
    if (Object.keys(paramsObj).length > 0) {
      setTrackingParams(paramsObj);
    }
  }, [setTrackingParams]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-dark-bg relative overflow-hidden">
      {/* Premium Dark Theme Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <main className="flex-1 flex flex-col w-full h-full relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/bridge/:offerId" element={<BridgePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


