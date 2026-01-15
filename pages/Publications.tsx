import React from 'react';
import { BookOpen, FileText, Quote, Code, MonitorPlay, Link2, FileImage,  Image, Frame} from 'lucide-react';
import { PAPERS, PROFILE } from '../constants';
import { PaperType, Paper } from '../types';

export const Publications: React.FC = () => {
    // Group papers
    const journalPapers = PAPERS.filter(p => p.type === PaperType.JOURNAL);
    const confPapers = PAPERS.filter(p => p.type === PaperType.CONFERENCE);
    const preprints = PAPERS.filter(p => p.type === PaperType.PREPRINT);

    return (
        <div className="max-w-4xl mx-auto py-4">
            <header className="mb-12 border-b border-slate-200 pb-8">
                <div className="flex items-center gap-3 mb-2">
                    <BookOpen size={32} className="text-slate-700" />
                    <h1 className="text-3xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Publications</h1>
                </div>
            </header>

            <PaperSection title="IEEE/ACM Transactions" papers={journalPapers} />
            <PaperSection title="Conference Papers" papers={confPapers} />
            {/* <PaperSection title="Other Journal Papers" papers={others} /> */}
            <PaperSection title="Preprints & Technical Reports" papers={preprints} color="bg-slate-400" />
        </div>
    );
};

const PaperSection: React.FC<{ title: string; papers: Paper[]; color?: string }> = ({ title, papers, color = "bg-slate-800" }) => {
    if (papers.length === 0) return null;

    return (
        <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
                <span className={`w-1.5 h-6 ${color} rounded-full`}></span>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">{title}</h2>
            </div>
            <div className="space-y-6">
                {papers.map(paper => (
                    <PaperCard key={paper.id} paper={paper} />
                ))}
            </div>
        </section>
    );
};

const PaperCard: React.FC<{ paper: Paper }> = ({ paper }) => {
    return (
        <article className="relative bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-[#4f0505] hover:bg-slate-50 hover:shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-grow">
                    <h3 className="text-base font-bold text-slate-900 leading-tight mb-2 group-hover:text-primary-dark transition-colors">
                        {paper.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-2 leading-relaxed">
                        {paper.authors.map((author, i) => (
                            <span key={i}>
                                {author === PROFILE.name ? (
                                    <strong className="text-slate-900 font-extrabold border-b-2 border-slate-300">{author}</strong>
                                ) : author}
                                {i < paper.authors.length - 1 ? ", " : "."}
                            </span>
                        ))}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="italic font-serif text-slate-700">{paper.venue}</span>
                        <span className="hidden md:inline w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span className="font-mono text-slate-500">{paper.year}</span>
                    </div>
                </div>
                
                {/* Badges/Tags */}
                <div className="flex-shrink-0 flex flex-col gap-2 items-end">
                    {paper.tags?.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            <Trophy size={14} /> {tag}
                        </span>
                    ))}
                    {paper.note && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
                             {paper.note}
                        </span>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {paper.links.pdf && <ActionButton icon={<FileText size={16} />} label="PDF" href={paper.links.pdf} />}
                {paper.links.bibtex && <ActionButton icon={<Quote size={16} />} label="BibTeX" onClick={() => alert("BibTeX copied to clipboard (Simulated)")} />}
                {paper.links.code && <ActionButton icon={<Code size={16} />} label="Code" href={paper.links.code} />}
                {paper.links.slides && <ActionButton icon={<MonitorPlay size={16} />} label="Slides" href={paper.links.slides} />}
                {paper.links.arxiv && <ActionButton icon={<Link2 size={16} />} label="arXiv" href={paper.links.arxiv} />}
                {paper.links.poster && <ActionButton icon={<FileImage size={16} />} label="Poster" href={paper.links.poster} />}
            </div>
        </article>
    );
};

const ActionButton: React.FC<{ icon: React.ReactNode; label: string; href?: string; onClick?: () => void }> = ({ icon, label, href, onClick }) => {
    const className = "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors";
    
    if (href) {
        return <a href={href} target="_blank" className={className}>{icon} {label}</a>;
    }
    return <button onClick={onClick} className={className}>{icon} {label}</button>;
};

import { Trophy } from 'lucide-react';