/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Cpu, BookOpen, Terminal, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-wider text-indigo-700 uppercase mb-2">
            Background & Academic Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A second-year engineering student dedicated to understanding how digital networks are secured
            and how physical devices communicate safely in the modern world.
          </p>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Narrative & Key Principles (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                My name is <strong className="text-slate-900 font-semibold">Dipanshu Thakur</strong>, and I am currently in my second year of the{' '}
                <strong className="text-slate-900 font-semibold">Bachelor of Technology (B.Tech)</strong> program at{' '}
                <strong className="text-slate-900 font-semibold">Baderia Global Institute of Engineering and Management (BGIEM)</strong>.
              </p>

              <p>
                My academic journey is anchored in two high-impact, rapidly converging domains:{' '}
                <strong className="text-indigo-900 font-medium">Cybersecurity</strong> and the{' '}
                <strong className="text-indigo-900 font-medium">Internet of Things (IoT)</strong>. Rather than memorizing tools in isolation, I focus on understanding foundational protocols, network packets, operating system internals, and clean programming with Python.
              </p>

              <p>
                As a second-year student, I am actively investing my time in laboratory work, coursework in data structures, computer networking concepts, and writing Python scripts to automate repetitive system tasks. I believe security should be built into devices from the hardware level up to the application layer.
              </p>
            </div>

            {/* Core Commitments / Learning Focus */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <Terminal className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Practical Scripting</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Writing clean, readable Python code to understand networking concepts, file structures, and data handling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <Shield className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Defensive Mindset</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Focusing on secure development principles, authorization, encrypted communication, and risk minimization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>IoT Interfacing</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Studying sensor communication protocols, microcontrollers, and how telemetry moves securely across gateways.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Continuous Academic Growth</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Committed to foundational coursework, rigorous lab experiments, and preparing for future technical internships.
                </p>
              </div>
            </div>

            {/* Recruiter / Placement Note */}
            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 leading-relaxed">
              <span className="font-semibold text-indigo-900">Career Objective: </span>
              Currently seeking student technical internships, open-source guidance, and academic project collaborations to apply my growing knowledge of Python, IoT architecture, and cybersecurity principles.
            </div>
          </div>

          {/* Right: Hardware & Security Lab Visual Showcase (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs h-full flex flex-col">
              
              <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                <img
                  src="/src/assets/images/cybersecurity_iot_hero_1793165799581.jpg"
                  alt="IoT Hardware and Cybersecurity Engineering Laboratory"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-medium text-indigo-300">Lab & Studio Focus</span>
                  <p className="text-sm font-semibold leading-tight">Cybersecurity & IoT Hardware Systems</p>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    Academic Snapshot
                  </h3>
                  
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Degree</span>
                      <span className="font-semibold text-slate-800 text-right">{PORTFOLIO_DATA.college.degree}</span>
                    </div>

                    <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Specialization</span>
                      <span className="font-semibold text-slate-800 text-right">{PORTFOLIO_DATA.college.specialization}</span>
                    </div>

                    <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Current Year</span>
                      <span className="font-semibold text-indigo-700 text-right">{PORTFOLIO_DATA.college.currentYear} (Undergraduate)</span>
                    </div>

                    <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Institution</span>
                      <span className="font-semibold text-slate-800 text-right">{PORTFOLIO_DATA.college.shortName}</span>
                    </div>

                    <div className="flex items-start justify-between py-1">
                      <span className="text-slate-500">Campus Location</span>
                      <span className="font-medium text-slate-700 text-right">{PORTFOLIO_DATA.college.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="#education"
                    className="block text-center w-full py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shadow-2xs"
                  >
                    View Education & Coursework Details
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
