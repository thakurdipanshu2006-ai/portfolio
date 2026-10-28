/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PlaceholderModal } from './components/PlaceholderModal';
import { DeploymentModal } from './components/DeploymentModal';

export default function App() {
  const [placeholderModal, setPlaceholderModal] = useState<'github' | 'linkedin' | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Navigation */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPlaceholderModal={(type) => setPlaceholderModal(type)} />
        <About />
        <Skills />
        <Projects onOpenPlaceholderModal={(type) => setPlaceholderModal(type)} />
        <Education />
        <Contact onOpenPlaceholderModal={(type) => setPlaceholderModal(type)} />
      </main>

      {/* Footer with Dynamic Year & Links */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Interactive Helper Modals */}
      <PlaceholderModal
        type={placeholderModal}
        onClose={() => setPlaceholderModal(null)}
      />

      <DeploymentModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
