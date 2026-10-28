/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FolderGit2, Clock, Sparkles, Send, ArrowRight, ShieldCheck, Cpu, Code2 } from 'lucide-react';

interface ProjectsProps {
  onOpenPlaceholderModal: (type: 'github') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenPlaceholderModal }) => {
  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-wider text-indigo-700 uppercase mb-2">
            Work in Progress & Pipeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Honest and transparent showcase of ongoing academic work. Currently developing initial hands-on repositories during second-year coursework.
          </p>
        </div>

        {/* Tasteful Empty State Hero Card */}
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/70 p-8 sm:p-12 text-center max-w-4xl mx-auto mb-12">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
            <Clock className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Projects Coming Soon
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            As a 2nd-year B.Tech student, I am currently focusing on building strong foundations in
            Python programming, networking protocols, and IoT hardware basics. Once my first term labs
            and independent repositories reach release quality, they will be documented and linked here.
          </p>

          {/* Action buttons inside empty state */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenPlaceholderModal('github')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <FolderGit2 className="w-4 h-4 text-slate-500" />
              <span>GitHub Repository Link [Placeholder]</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl transition-all shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Propose a Student Project</span>
            </a>
          </div>
        </div>

        {/* Planned Laboratory Concepts / Academic Roadmap (Clearly labeled as Planned) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Planned Academic Roadmap & Laboratory Themes</span>
            </h4>
            <span className="text-xs text-slate-500">In Development · 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Planned Item 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                    Planned Lab
                  </span>
                </div>
                <h5 className="font-bold text-slate-900 text-base">
                  Network Diagnostics & Packet Utility
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Python-based socket scripting tool designed to inspect local network endpoints, test port reachability, and parse packet headers for educational analysis.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
                <span>Focus: Python & Sockets</span>
                <span className="font-mono text-2xs">Upcoming</span>
              </div>
            </div>

            {/* Planned Item 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                    Planned Lab
                  </span>
                </div>
                <h5 className="font-bold text-slate-900 text-base">
                  Secure IoT Telemetry Node
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interfacing environmental sensors with microcontrollers, transmitting serialized sensor metrics over MQTT protocol with authentication and TLS payload protection.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
                <span>Focus: Embedded & MQTT</span>
                <span className="font-mono text-2xs">Upcoming</span>
              </div>
            </div>

            {/* Planned Item 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                    Planned Lab
                  </span>
                </div>
                <h5 className="font-bold text-slate-900 text-base">
                  Automated Security Configuration Check
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lightweight command-line audit script that inspects file permissions, listening services, and user accounts on Linux workstations to highlight security best practices.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
                <span>Focus: Cybersecurity & Bash/Python</span>
                <span className="font-mono text-2xs">Upcoming</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
