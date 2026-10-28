/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Code2, Shield, ExternalLink, Copy, Check, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PlaceholderModalProps {
  type: 'github' | 'linkedin' | null;
  onClose: () => void;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isGitHub = type === 'github';
  const title = isGitHub ? 'GitHub Profile Placeholder' : 'LinkedIn Profile Placeholder';
  const [testUrl, setTestUrl] = useState(
    isGitHub ? 'https://github.com/your-username' : 'https://www.linkedin.com/in/your-username'
  );
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const codeSnippet = isGitHub
    ? `// In src/data/portfolioData.ts:
github: {
  url: "${testUrl}",
  isPlaceholder: false,
  placeholderLabel: "GitHub Profile",
},`
    : `// In src/data/portfolioData.ts:
linkedin: {
  url: "${testUrl}",
  isPlaceholder: false,
  placeholderLabel: "LinkedIn Profile",
},`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            {isGitHub ? <Code2 className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
          </div>
          <div>
            <span className="text-2xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
              Honest Placeholder
            </span>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              {title}
            </h3>
          </div>
        </div>

        {/* Explanation */}
        <p className="text-xs text-slate-600 leading-relaxed">
          As requested, real profile links will be added once Dipanshu Thakur supplies his specific account handles. In the meantime, this placeholder preserves design alignment without displaying dead or misleading fake links.
        </p>

        {/* Quick URL updater / Preview */}
        <div className="mt-5 space-y-3">
          <label className="block text-xs font-semibold text-slate-700">
            Preview Your {isGitHub ? 'GitHub' : 'LinkedIn'} URL:
          </label>
          <input
            type="url"
            value={testUrl}
            onChange={(e) => setTestUrl(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-800"
          />

          <div className="flex items-center justify-between text-2xs text-slate-500 pt-1">
            <span>Edit file: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">/src/data/portfolioData.ts</code></span>
            <a
              href={testUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-600 hover:underline font-semibold"
            >
              <span>Test Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Code Snippet to Copy */}
        <div className="mt-4 p-3 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono relative overflow-hidden">
          <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-800 text-2xs text-slate-400">
            <span>Code snippet to paste:</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-indigo-300 hover:text-white transition-colors cursor-pointer"
            >
              {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="text-2xs overflow-x-auto text-emerald-400 leading-tight">
            {codeSnippet}
          </pre>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
