/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Code2, Shield, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenPlaceholderModal: (type: 'github' | 'linkedin') => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPlaceholderModal }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Internship Opportunity / Inquiry');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello Dipanshu,\n\n${message}\n\nBest regards,\n${senderName || 'A recruiter/peer'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-wider text-indigo-700 uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Networking
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            I am always eager to connect with engineering mentors, recruiters, and fellow students.
            Whether you have an internship opportunity or want to discuss cybersecurity and IoT, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Placeholders (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-indigo-300" />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Direct Email Address
              </span>
              <div className="mt-1">
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-indigo-300 transition-colors break-all underline underline-offset-4"
                >
                  {PORTFOLIO_DATA.email}
                </a>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Click to open directly in your mail application or copy below.
              </p>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Clearly Labeled Placeholders */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                Professional Profiles & Social Links
              </h4>

              {/* GitHub Placeholder Card */}
              <div
                onClick={() => onOpenPlaceholderModal('github')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 transition-all cursor-pointer group flex items-start justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:text-indigo-600 transition-colors">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">GitHub</span>
                      <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                        Placeholder
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      URL pending addition · Click to customize or view details
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors mt-1" />
              </div>

              {/* LinkedIn Placeholder Card */}
              <div
                onClick={() => onOpenPlaceholderModal('linkedin')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 transition-all cursor-pointer group flex items-start justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:text-indigo-600 transition-colors">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">LinkedIn</span>
                      <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                        Placeholder
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      URL pending addition · Click to customize or view details
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors mt-1" />
              </div>
            </div>

            {/* Note on Student Verification */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <AlertCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>Verification Policy</span>
              </div>
              <p>
                In accordance with professional portfolio ethics, only verified contact channels are activated. Placeholder accounts will be linked directly upon creation.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Email Composer Assistant (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                  <span>Draft an Inquiry to Dipanshu</span>
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in your details below to automatically open your local email client with your message pre-composed.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="senderName" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name or Organization
                  </label>
                  <input
                    id="senderName"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Jane Doe, Tech Recruiting Team"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject Line
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
                  >
                    <option value="Internship Opportunity / Inquiry">Internship Opportunity / Inquiry</option>
                    <option value="Student Project Collaboration">Student Project Collaboration</option>
                    <option value="Academic Mentorship / Networking">Academic Mentorship / Networking</option>
                    <option value="General Query">General Query</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Dipanshu, I came across your portfolio and would like to discuss..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 placeholder:text-slate-400 resize-none"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-2xs text-slate-500">
                    Target: {PORTFOLIO_DATA.email}
                  </span>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl transition-all shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open in Email Client</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
