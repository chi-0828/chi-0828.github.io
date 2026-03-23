import React from 'react';
import { School, Briefcase, Flame, Trophy, CheckCircle2, Contact, Code2, Cpu } from 'lucide-react';
import { EDUCATION, EXPERIENCE, NEWS, AWARDS } from '../constants';

export const Home: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-15">
            <section className="mb-12 scroll-mt-24" id="about">
                {/* 標題區 */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg">
                        <Contact className="text-slate-700" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Hello, I'm Liang-Chi Chen.</h2>
                </div>

                {/* 內容卡片 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                    <p className="text-slate-800 text-base mb-4">
                        I am currently a PhD Candidate at National Taiwan University, 
                        specializing in Embedded Systems and 
                        Memory/Storage Systems/Devices.
                        My PhD research focuses on Processing-in-Memory (PIM) and In-Storage Computing accelerators. 
                        I also work on optimizations for NAND flash, emerging NVM (e.g., ReRAM or persistent memory), and CXL systems.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                        <div className="flex items-start gap-3">
                            <Cpu className="text-slate-400 mt-1" size={20} />
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Research Interest</h3>
                                <p className="text-slate-500 text-sm mt-1">Memory Systems, Storage, PIM, Accelerators</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Code2 className="text-slate-400 mt-1" size={20} />
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Programming</h3>
                                <p className="text-slate-500 text-sm mt-1">C/C++, Python</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Education Section */}
            <section id="education" className="scroll-mt-24">
                <div className="flex items-center space-x-2 mb-4">
                    <School className="text-slate-600" />
                    <h2 className="text-xl font-bold text-slate-800">Education</h2>
                </div>
                <div className="bg-white px-4 md:px-5 pt-3 pb-5 rounded-3xl shadow-sm border border-slate-200">
                    <div className="relative space-y-4">
                        {/* Vertical Line */}
                        <div className="absolute top-2 bottom-2 left-7 w-px bg-slate-200 -translate-x-1/2"></div>
                        
                        {EDUCATION.map((edu, index) => (
                            <div key={edu.id} className={`relative flex gap-4 md:gap-6 group`}>
                                <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center p-1">
                                    <img 
                                        src={edu.logo} 
                                        alt={edu.school} 
                                        className="w-full h-full object-contain" 
                                    />
                                </div>
                                <div className="flex-grow pt-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                                        <h3 className="font-bold text-base text-slate-900">{edu.school}</h3>
                                        <span className="text-xs bg-slate-100 px-2 py-1 rounded-md">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{edu.degree}</p>
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
                <div className="flex items-center space-x-2 mb-3">
                    <Briefcase className="text-slate-600" />
                    <h2 className="text-xl font-bold text-slate-800">Experience</h2>
                </div>
                <div className="bg-white px-4 md:px-5 pt-3 pb-5 rounded-3xl shadow-sm border border-slate-200">
                    <div className="relative space-y-4">
                        {/* Vertical Line */}
                        <div className="absolute top-2 bottom-2 left-7 w-px bg-slate-200 -translate-x-1/2"></div>

                        {EXPERIENCE.map((exp) => (
                            <div key={exp.id} className="relative flex gap-4 md:gap-6 group">
                                <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center p-1 group-hover:border-slate-400 transition-colors">
                                    <img 
                                        src={exp.logo} 
                                        alt={exp.company} 
                                        className="w-full h-full object-contain" 
                                    />
                                </div>
                                <div className="flex-grow pt-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                        <h3 className="font-bold text-base text-slate-900 group-hover:text-slate-700 transition-colors">{exp.role}</h3>
                                        <span className="text-xs bg-slate-100 px-2 py-1 rounded-md">{exp.period}</span>
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
                <div className="flex items-center space-x-2 mb-4">
                    <Flame className="text-slate-500" />
                    <h2 className="text-xl font-bold text-slate-800">Latest News</h2>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-slate-200">
                    <ul className="space-y-3">
                        {NEWS.map((item, index) => (
                            <li key={item.id} className="relative pl-4">
                                <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                                
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                                    <span className="shrink-0 text-xs font-bold text-slate-500 w-20">
                                        {item.monthYear}
                                    </span>
                                    
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="scroll-mt-24">
                <div className="flex items-center space-x-2 mb-4">
                    <Trophy className="text-amber-500" />
                    <h2 className="text-xl font-bold text-slate-800">Honors and Awards</h2>
                </div>

                <div className="bg-white px-4 md:px-6 py-4 md:py-5 rounded-3xl shadow-sm border border-slate-200">
                    <div>
                    {AWARDS.map((award, index) => (
                        <React.Fragment key={award.id}>
                        {index > 0 && <div className="border-t border-slate-100" />}

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-1 md:gap-4 py-3">
                            {/* Left */}
                            <div className="min-w-0">
                            <h4 className="text-sm font-semibold text-slate-800 leading-6">
                                {award.title}
                            </h4>
                            {award.description && (
                                <p className="text-sm text-slate-500 italic leading-6">
                                {award.description}
                                </p>
                            )}
                            </div>

                            {/* Right */}
                            <div className="md:text-right leading-6">
                            <p className="text-sm font-semibold text-slate-700">
                                {award.year}
                            </p>
                            <p className="text-sm text-slate-500">
                                {award.issuer}
                            </p>
                            </div>
                        </div>
                        </React.Fragment>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
