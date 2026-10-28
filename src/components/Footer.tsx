/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, BookOpen, Mail, Shield } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Identity */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs tracking-wider">
                DT
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                {PORTFOLIO_DATA.name}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {PORTFOLIO_DATA.role} · {PORTFOLIO_DATA.college.name}
            </p>
          </div>

          {/* Quick Section Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Setup / Back to Top Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Deploy Guide</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Dynamic Copyright & Verified Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.
          </p>
          <p className="text-2xs text-slate-500">
            Designed for internship applications, placements, and professional networking.
          </p>
        </div>

      </div>
    </footer>
  );
};
