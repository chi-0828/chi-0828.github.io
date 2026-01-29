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
            {/* <header className="mb-12 border-b border-slate-200 pb-8">
                <div className="flex items-center gap-3 mb-2">
                    <BookOpen size={32} className="text-slate-700" />
                    <h1 className="text-3xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Publications</h1>
                </div>
            </header> */}

            <PaperSection title="Journals, IEEE/ACM Transactions" papers={journalPapers} />
            <PaperSection title="Conference Papers" papers={confPapers} />
            {/* <PaperSection title="Other Journal Papers" papers={others} /> */}
            <PaperSection title="Preprints & Technical Reports" papers={preprints} color="bg-slate-400" />
        </div>
    );
};


const PaperSection: React.FC<{ title: string; papers: Paper[]; color?: string }> = ({ title, papers, color = "bg-slate-800" }) => {
    if (papers.length === 0) return null;

    return (
        <section className="mb-12"> {/* 減少區塊間距 mb-16 -> mb-12 */}
            <div className="flex items-center gap-2 mb-4"> {/* 標題貼近一點 mb-8 -> mb-4 */}
                <span className={`w-1.5 h-6 ${color} rounded-full`}></span>
                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">{title}</h2>
            </div>
            
            {/* 這裡是大容器：白底、圓角、統一陰影 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {/* 使用 divide-y 在每個項目之間自動加線 */}
                <div className="divide-y divide-slate-100">
                    {papers.map(paper => (
                        <PaperCard key={paper.id} paper={paper} />
                    ))}
                </div>
            </div>
        </section>
    );
};


const PaperCard: React.FC<{ paper: Paper }> = ({ paper }) => {
    return (
        // 這裡移除了 shadow, rounded, border，改用 hover 背景變色
        <article className="relative p-5 hover:bg-slate-50 transition-colors duration-200 group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#4f0505] transition-colors duration-200"></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div className="flex-grow pr-4">
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 leading-snug mb-1.5 group-hover:text-primary-dark transition-colors">
                        {paper.title}
                    </h3>
                    
                    <p className="text-slate-600 text-[13px] md:text-sm mb-2 leading-relaxed">
                        {paper.authors.map((author, i) => (
                            <span key={i}>
                                {author === PROFILE.name ? (
                                    <strong className="text-slate-900 font-bold">{author}</strong> // 拿掉底線，保持清單乾淨
                                ) : author}
                                {i < paper.authors.length - 1 ? ", " : "."}
                            </span>
                        ))}
                    </p>

                    {/* Meta info (Venue + Year) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                        <span className="font-serif text-slate-900 font-medium">{paper.venue}</span>
                        <span className="font-serif text-slate-900 font-medium">{paper.year}</span>
                    </div>
                </div>
                
                {/* Badges/Tags - 靠右對齊 */}
                <div className="flex-shrink-0 flex flex-row md:flex-col gap-2 md:items-end mt-2 md:mt-0">
                    {paper.tags?.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-slate-700 border border-amber-100 whitespace-nowrap">
                            <Trophy size={12} className="text-amber-600"/> {tag}
                        </span>
                    ))}
                    {paper.note && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-100 whitespace-nowrap">
                             {paper.note}
                        </span>
                    )}
                </div>
            </div>

            {/* Actions */}

            <div className="mt-3 flex flex-wrap gap-2">
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