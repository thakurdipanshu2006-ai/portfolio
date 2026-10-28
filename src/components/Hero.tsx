/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowRight, Shield, Cpu, Code2, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenPlaceholderModal: (type: 'github' | 'linkedin') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlaceholderModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Subtle Ambient Gradients (Strict navy & indigo accents on clean light canvas) */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 left-10 -z-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Column Typography, Right Column Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Kicker - clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-600 inline-block" />
              <span>B.Tech Student Portfolio</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>2nd Year</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>BGIEM</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
                Hi, I'm <span className="text-indigo-600">Dipanshu Thakur</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight">
                {PORTFOLIO_DATA.role}
              </p>
            </div>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Second-year undergraduate engineering student at{' '}
              <strong className="text-slate-900 font-semibold">
                Baderia Global Institute of Engineering and Management
              </strong>
              . Passionate about learning Python programming, mastering cybersecurity fundamentals,
              and exploring secure architectures for the Internet of Things (IoT).
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-xs"
              >
                <span>Explore Skills</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors shadow-xs"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Direct Links & Placeholders */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="underline underline-offset-2">{PORTFOLIO_DATA.email}</span>
                </a>

                <button
                  onClick={() => onOpenPlaceholderModal('github')}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub Profile [Placeholder]</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </button>

                <button
                  onClick={() => onOpenPlaceholderModal('linkedin')}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile [Placeholder]</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (col-span-5): Clean Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Framed Card with single elevation */}
              <div className="relative bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Profile Portrait */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/src/assets/images/student_avatar_portrait_1793165799653.jpg"
                    alt="Dipanshu Thakur - Cybersecurity & IoT Student"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container in case of error
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Overlay Identity Information */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-bold text-base tracking-tight leading-snug">Dipanshu Thakur</p>
                    <p className="text-xs text-slate-200">2nd Year B.Tech · BGIEM</p>
                  </div>
                </div>

                {/* Card Sub-Info Strip */}
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium text-slate-500">Core Focus:</span>
                    <span className="font-semibold text-slate-800">Cybersecurity & IoT</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium text-slate-500">Primary Language:</span>
                    <span className="font-semibold text-slate-800">Python</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium text-slate-500">Location:</span>
                    <span className="font-medium text-slate-700">Jabalpur, MP, India</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Key Facts Strip Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Institution</span>
            <p className="text-sm font-bold text-slate-900 leading-snug">Baderia Global Institute</p>
            <p className="text-xs text-slate-500">Engineering & Management</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Academic Year</span>
            <p className="text-sm font-bold text-slate-900 leading-snug">2nd Year (Sophomore)</p>
            <p className="text-xs text-slate-500">Bachelor of Technology</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Major Domain</span>
            <p className="text-sm font-bold text-slate-900 leading-snug">Cybersecurity & IoT</p>
            <p className="text-xs text-slate-500">Network & System Defense</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Key Technical Skills</span>
            <p className="text-sm font-bold text-indigo-700 leading-snug">Python & Cyber Defense</p>
            <p className="text-xs text-slate-500">Foundational & Applied</p>
          </div>
        </div>

      </div>
    </section>
  );
};
