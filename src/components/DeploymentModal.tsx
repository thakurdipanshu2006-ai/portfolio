/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, BookOpen, Globe, Download, Terminal, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'github' | 'netlify' | 'local' | 'html'>('github');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const handleDownloadStandaloneHtml = () => {
    // Generate clean standalone HTML file
    const standaloneHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dipanshu Thakur – Cybersecurity & IoT Student Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    code, pre { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased">
  <header class="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-slate-900 text-lg">
        <span class="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center text-sm">DT</span>
        <span>Dipanshu Thakur</span>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#about" class="hover:text-slate-900">About</a>
        <a href="#skills" class="hover:text-slate-900">Skills</a>
        <a href="#education" class="hover:text-slate-900">Education</a>
        <a href="#contact" class="hover:text-slate-900">Contact</a>
      </nav>
      <a href="mailto:thakurdipanshu2006@gmail.com" class="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-indigo-600">
        Contact Me
      </a>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-6 py-16 space-y-20">
    <!-- Hero -->
    <section class="space-y-6 max-w-3xl">
      <div class="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
        <span>B.Tech Student Portfolio</span> · <span>2nd Year</span> · <span>BGIEM</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
        Hi, I'm <span class="text-indigo-600">Dipanshu Thakur</span>
      </h1>
      <p class="text-xl font-semibold text-slate-700">Cybersecurity & IoT Student</p>
      <p class="text-base text-slate-600 leading-relaxed">
        Second-year undergraduate engineering student at <strong>Baderia Global Institute of Engineering and Management</strong>.
        Focused on learning Python, mastering cybersecurity principles, and exploring Internet of Things technologies.
      </p>
      <div class="flex flex-wrap gap-3 pt-2">
        <a href="mailto:thakurdipanshu2006@gmail.com" class="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-indigo-600">
          Email: thakurdipanshu2006@gmail.com
        </a>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="space-y-8">
      <div>
        <h2 class="text-2xl font-bold text-slate-900">Technical Skills</h2>
        <p class="text-sm text-slate-600 mt-1">Foundational competencies actively studied in coursework.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Python</h3>
          <p class="text-xs text-slate-600 mb-4">Core Syntax, Object-Oriented Programming, Socket Scripting & Task Automation.</p>
          <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
            <li>Socket Programming & Networking Basics</li>
            <li>Automation Scripts & File Parsing (JSON/CSV)</li>
            <li>Data Structures & Algorithmic Logic</li>
          </ul>
        </div>
        <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Cybersecurity</h3>
          <p class="text-xs text-slate-600 mb-4">Network Protocols, Threat Modeling, Defensive Principles & Information Security.</p>
          <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
            <li>TCP/IP & OSI Architecture</li>
            <li>Information Security Fundamentals (CIA Triad)</li>
            <li>System Hardening & Vulnerability Concepts</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section id="education" class="p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
      <h2 class="text-2xl font-bold text-slate-900">Education</h2>
      <div>
        <h3 class="text-lg font-semibold text-slate-900">Bachelor of Technology (B.Tech)</h3>
        <p class="text-sm font-medium text-indigo-700">Specialization: Cybersecurity & Internet of Things (IoT)</p>
        <p class="text-sm text-slate-700 mt-1">Baderia Global Institute of Engineering and Management (BGIEM), Jabalpur</p>
        <p class="text-xs text-slate-500 mt-0.5">Current Standing: 2nd Year Student (Undergraduate)</p>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="p-8 bg-slate-900 text-white rounded-2xl space-y-4">
      <h2 class="text-2xl font-bold">Contact Dipanshu</h2>
      <p class="text-sm text-slate-300">Click below to open a direct email in your mail client:</p>
      <a href="mailto:thakurdipanshu2006@gmail.com" class="inline-block text-lg font-bold text-indigo-300 underline">
        thakurdipanshu2006@gmail.com
      </a>
      <p class="text-xs text-slate-400">GitHub & LinkedIn profiles will be connected soon.</p>
    </section>
  </main>

  <footer class="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
    <p>© ${new Date().getFullYear()} Dipanshu Thakur · Cybersecurity & IoT Student · Baderia Global Institute of Engineering and Management</p>
  </footer>
</body>
</html>`;

    const blob = new Blob([standaloneHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dipanshu_Thakur_Portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Close guide modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Setup & Deployment Guide
            </h3>
            <p className="text-xs text-slate-500">
              Clear instructions for deploying this portfolio on GitHub Pages, Netlify, or running locally.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('github')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'github'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Deploy to GitHub Pages
          </button>
          <button
            onClick={() => setActiveTab('netlify')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'netlify'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Deploy to Netlify
          </button>
          <button
            onClick={() => setActiveTab('local')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'local'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Run Locally
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'html'
                ? 'bg-indigo-600 text-white'
                : 'text-indigo-700 hover:bg-indigo-50'
            }`}
          >
            Standalone HTML Download
          </button>
        </div>

        {/* Tab 1: GitHub Pages */}
        {activeTab === 'github' && (
          <div className="space-y-4 text-xs text-slate-600">
            <p className="leading-relaxed">
              GitHub Pages provides free hosting for personal websites. Here is the recommended, automated approach using GitHub Actions or the <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">dist</code> build folder:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Step 1: Create a GitHub Repository</span>
                <p>Create a repository named <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">dipanshu-portfolio</code> or <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">yourusername.github.io</code>.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Step 2: Build the Production Bundle</span>
                <div className="flex items-center justify-between bg-slate-900 text-white p-2.5 rounded-lg font-mono text-2xs mt-1">
                  <span>npm run build</span>
                  <button
                    onClick={() => handleCopy('npm run build', 'cmd1')}
                    className="text-slate-400 hover:text-white"
                  >
                    {copiedCmd === 'cmd1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="mt-1 text-2xs text-slate-500">This creates an optimized, self-contained <code className="font-mono">dist/</code> directory.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Step 3: Deploy via GitHub Actions or gh-pages</span>
                <p>
                  In your GitHub repository settings, go to <strong>Pages</strong> &rarr; <strong>Build and deployment</strong>, set the source to <strong>GitHub Actions</strong> (Vite template) or deploy the <code className="font-mono">dist</code> folder.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Netlify */}
        {activeTab === 'netlify' && (
          <div className="space-y-4 text-xs text-slate-600">
            <p className="leading-relaxed">
              Netlify is one of the easiest ways to host a modern Vite React application with automatic continuous deployment:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Method A: Zero-Config Drag & Drop</span>
                <p>1. Run <code className="font-mono bg-white px-1 rounded border border-slate-200">npm run build</code> locally to create the <code className="font-mono">dist/</code> folder.</p>
                <p>2. Log into <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-indigo-600 underline">app.netlify.com/drop</a>.</p>
                <p>3. Drag the <code className="font-mono">dist</code> folder into the browser window. Your site is live in 10 seconds!</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Method B: Connect with Git</span>
                <p>1. Import your GitHub repository into Netlify.</p>
                <p>2. Build command: <code className="font-mono bg-white px-1 rounded border border-slate-200">npm run build</code></p>
                <p>3. Publish directory: <code className="font-mono bg-white px-1 rounded border border-slate-200">dist</code></p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Local Setup */}
        {activeTab === 'local' && (
          <div className="space-y-4 text-xs text-slate-600">
            <p className="leading-relaxed">
              To run and customize this project on your personal computer:
            </p>

            <div className="space-y-2 font-mono text-2xs">
              <div className="p-3 bg-slate-900 text-slate-200 rounded-xl space-y-2">
                <p className="text-slate-400"># 1. Clone or extract the files</p>
                <p className="text-indigo-300">git clone &lt;your-repo-url&gt;</p>
                <p className="text-slate-400"># 2. Install dependencies</p>
                <p className="text-indigo-300">npm install</p>
                <p className="text-slate-400"># 3. Start local development server</p>
                <p className="text-emerald-400">npm run dev</p>
              </div>
            </div>

            <p>
              The development server will launch at <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-indigo-700">http://localhost:3000</code>.
            </p>
          </div>
        )}

        {/* Tab 4: Standalone HTML Download */}
        {activeTab === 'html' && (
          <div className="space-y-4 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 space-y-2">
              <h4 className="font-bold text-indigo-950 text-sm">
                Ready-to-Open Standalone HTML File
              </h4>
              <p className="text-slate-600 leading-relaxed">
                As requested, you can download a single-file, zero-dependency version of your portfolio. You can double-click this file to open it directly in any web browser without running any terminal commands or web servers!
              </p>

              <button
                onClick={handleDownloadStandaloneHtml}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Standalone HTML Portfolio</span>
              </button>
            </div>

            <p className="text-2xs text-slate-400">
              * Perfect for emailing directly to recruiters, storing on a flash drive, or opening offline.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-2xs text-slate-500">
            Clean code · Responsive layout · Accessible design
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
