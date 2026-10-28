/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Building2, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { college, educationDetails } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-wider text-indigo-700 uppercase mb-2">
            Academic Background & Institution
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Formal undergraduate engineering curriculum currently pursued at Baderia Global Institute of Engineering and Management.
          </p>
        </div>

        {/* Primary Education Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Institution Badge & Core Information (col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    {college.currentYear} · Undergraduate
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                    {college.degree}
                  </h3>
                  <p className="text-base font-semibold text-slate-700 mt-1">
                    Specialization: <span className="text-indigo-600">{college.specialization}</span>
                  </p>
                </div>
              </div>

              {/* Institution details */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 space-y-3">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-900">
                  <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{college.name}</span>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{college.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Status: Currently Enrolled (2nd Year)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                The academic program integrates rigorous engineering mathematics and software engineering principles with dedicated tracks in cyber defense, cryptographic fundamentals, and embedded IoT system architectures.
              </p>
            </div>

            {/* Coursework & Modules (col-span-5) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Key Coursework & Laboratory Subjects</span>
              </div>

              <ul className="space-y-2.5">
                {educationDetails.coursework.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{course}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-200/70 text-2xs text-slate-400">
                Verified against BGIEM undergraduate engineering syllabus.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
