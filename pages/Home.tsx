import React from 'react';
import { School, Briefcase, Flame, Trophy, CheckCircle2, FlaskConical, Code } from 'lucide-react';
import { EDUCATION, EXPERIENCE, NEWS, AWARDS } from '../constants';

export const Home: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            
            {/* Education Section */}
            <section id="education" className="scroll-mt-24">
                <div className="flex items-center space-x-2 mb-6">
                    <School className="text-slate-600" />
                    <h2 className="text-2xl font-bold text-slate-800">Education</h2>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-slate-200">
                    <div className="relative space-y-10">
                        {/* Vertical Line */}
                        <div className="absolute top-4 bottom-4 left-6 w-px bg-slate-200 -translate-x-1/2"></div>
                        
                        {EDUCATION.map((edu, index) => (
                            <div key={edu.id} className={`relative flex gap-4 md:gap-6 group ${index > 0 ? 'opacity-90' : ''}`}>
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
                                    <School size={24} className="text-slate-500" />
                                </div>
                                <div className="flex-grow pt-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                                        <h3 className="font-bold text-lg text-slate-900">{edu.school}</h3>
                                        <span className="text-sm font-mono text-slate-500">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-600 font-medium">{edu.degree}</p>
                                    {edu.status && (
                                        <p className="text-sm text-slate-500 mt-2 flex items-center">
                                            <CheckCircle2 size={14} className="mr-1 text-emerald-600" />
                                            {edu.status}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
                <div className="flex items-center space-x-2 mb-6">
                    <Briefcase className="text-slate-600" />
                    <h2 className="text-2xl font-bold text-slate-800">Experience</h2>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-slate-200">
                    <div className="relative space-y-10">
                        {/* Vertical Line */}
                        <div className="absolute top-4 bottom-4 left-6 w-px bg-slate-200 -translate-x-1/2"></div>

                        {EXPERIENCE.map((exp) => (
                            <div key={exp.id} className="relative flex gap-4 md:gap-6 group">
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-slate-400 transition-colors shadow-sm">
                                    {exp.icon === 'science' ? <FlaskConical size={20} /> : <Code size={20} />}
                                </div>
                                <div className="flex-grow pt-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-slate-700 transition-colors">{exp.role}</h3>
                                        <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{exp.period}</span>
                                    </div>
                                    <p className="text-slate-600 font-medium text-sm mb-2">{exp.company}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section id="news" className="scroll-mt-24">
                <div className="flex items-center space-x-2 mb-6">
                    <Flame className="text-slate-500" />
                    <h2 className="text-2xl font-bold text-slate-800">Latest News</h2>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-slate-200">
                    <ul className="space-y-6">
                        {NEWS.map((item, index) => (
                            <li key={item.id} className={`relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 ${index === 0 ? 'before:bg-slate-600' : 'before:bg-slate-300'} before:rounded-full`}>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.monthYear}</span>
                                <p className="text-sm leading-relaxed text-slate-700">{item.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="scroll-mt-24">
                <div className="flex items-center space-x-2 mb-6">
                    <Trophy className="text-amber-500" />
                    <h2 className="text-2xl font-bold text-slate-800">Awards</h2>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group">
                    <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                        <Trophy size={140} className="text-slate-900" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        {AWARDS.map((award, index) => (
                            <React.Fragment key={award.id}>
                                {index > 0 && <div className="w-full h-px bg-slate-100"></div>}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`inline-block w-2 h-2 rounded-full ${index === 0 ? 'bg-slate-800' : 'bg-slate-300'}`}></span>
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{award.category}</p>
                                    </div>
                                    <h4 className="font-bold text-base text-slate-900 leading-tight">{award.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{award.description}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};