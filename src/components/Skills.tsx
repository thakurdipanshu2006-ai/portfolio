/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Terminal, Shield, Cpu, CheckCircle2, ChevronRight, Layers, FileCode, Lock, Network } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'python' | 'cybersecurity' | 'iot'>('all');

  const filteredSkills =
    activeTab === 'all'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-indigo-700 uppercase mb-2">
              Technical Competencies & Curricular Areas
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Skills & Focus Areas
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Curated conceptual frameworks and programming fundamentals currently studied in coursework and independent lab practice. Authentic representation without artificial ratings or fabricated percentages.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('python')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'python'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Python
            </button>
            <button
              onClick={() => setActiveTab('cybersecurity')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'cybersecurity'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setActiveTab('iot')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'iot'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              IoT Foundations
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => {
            const isPython = skill.id === 'python';
            const isCyber = skill.id === 'cybersecurity';
            const isIoT = skill.id === 'iot';

            return (
              <div
                key={skill.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
              >
                <div>
                  {/* Skill Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs group-hover:bg-indigo-600 transition-colors">
                      {isPython && <Terminal className="w-6 h-6" />}
                      {isCyber && <Shield className="w-6 h-6" />}
                      {isIoT && <Cpu className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {skill.summary}
                  </p>

                  {/* Core Conceptual Topics (No fake percentages) */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 tracking-wide uppercase mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Curricular Topics & Principles</span>
                    </h4>
                    <ul className="space-y-2">
                      {skill.coreTopics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Lab Focus */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 tracking-wide uppercase mb-3 flex items-center gap-1.5">
                      <FileCode className="w-3.5 h-3.5 text-slate-700" />
                      <span>Academic Lab Applications</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {skill.labFocus.map((lab, idx) => (
                        <li key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{lab}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Status: Coursework & Hands-On Practice</span>
                  <span className="font-semibold text-indigo-600">Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Academic Rigor & Transparency */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 shrink-0">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Transparent Student Profile</h4>
              <p className="text-xs text-slate-600">
                Skills are listed by curricular subject matter and actual coursework rather than arbitrary self-assigned percentages.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap"
          >
            <span>See Project Pipeline</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
