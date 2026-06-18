import React from 'react';
import { FileText, Quote, Code, MonitorPlay, Link2, FileImage, Trophy } from 'lucide-react';
import { PAPERS, PROFILE } from '../constants';
import { PaperType, Paper } from '../types';

export const Publications: React.FC = () => {
    const journalPapers = PAPERS.filter((p) => p.type === PaperType.JOURNAL);
    const confPapers = PAPERS.filter((p) => p.type === PaperType.CONFERENCE);
    const preprints = PAPERS.filter((p) => p.type === PaperType.PREPRINT);

    return (
        <div className="animate-rise">
            <div className="flex items-center gap-3 mb-1">
                <h1 className="font-arial text-3xl font-bold tracking-tight text-ink">Publications</h1>
            </div>
            <p className="text-sm text-muted mb-10">{PAPERS.length} papers across journals, conferences, and preprints.</p>

            <PaperSection title="Journals, IEEE/ACM Transactions" papers={journalPapers} />
            <PaperSection title="Conference Papers" papers={confPapers} />
            <PaperSection title="Preprints & Technical Reports" papers={preprints} color="bg-faint" />
        </div>
    );
};

const PaperSection: React.FC<{ title: string; papers: Paper[]; color?: string }> = ({ title, papers, color = 'bg-accent' }) => {
    if (papers.length === 0) return null;
    return (
        <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
                <span className={`w-1.5 h-6 ${color} rounded-full`} />
                <h2 className="font-arial text-xl font-bold text-ink uppercase tracking-wide flex items-center gap-2">
                    {title}
                    <span className="text-muted text-lg font-medium">({papers.length})</span>
                </h2>
            </div>

            <div className="bg-surface rounded-2xl shadow-soft border border-line overflow-hidden">
                <div className="divide-y divide-line">
                    {papers.map((paper, index) => (
                        <PaperCard key={paper.id} paper={paper} index={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PaperCard: React.FC<{ paper: Paper; index: number }> = ({ paper, index }) => (
    <article className="relative p-5 hover:bg-accent-soft/60 transition-colors duration-200 group">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-accent transition-colors duration-200" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
            <div className="flex-grow pr-4">
                <h3 className="text-base font-bold text-ink leading-snug mb-1.5 group-hover:text-accent transition-colors flex items-start gap-2">
                    <span className="text-muted font-mono text-sm mt-[2px] shrink-0">[{index}]</span>
                    <span>{paper.title}</span>
                </h3>

                <p className="text-muted text-[13px] md:text-sm mb-2 leading-relaxed ml-7">
                    {paper.authors.map((author, i) => (
                        <span key={i}>
                            {author === PROFILE.name ? (
                                <strong className="text-ink font-bold">{author}</strong>
                            ) : author}
                            {i < paper.authors.length - 1 ? ', ' : '.'}
                        </span>
                    ))}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm ml-7">
                    <span className="font-serif italic text-ink font-medium">{paper.venue}</span>
                    <span className="font-serif text-ink font-medium">{paper.year}</span>
                </div>
            </div>

            <div className="flex-shrink-0 flex flex-row md:flex-col gap-2 md:items-end mt-2 md:mt-0">
                {paper.tags?.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-100 whitespace-nowrap">
                        <Trophy size={12} className="text-amber-600" /> {tag}
                    </span>
                ))}
                {paper.note && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-accent-soft text-accent border border-accent/20 whitespace-nowrap">
                        {paper.note}
                    </span>
                )}
            </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 ml-7">
            {paper.links.pdf && <ActionButton icon={<FileText size={16} />} label="PDF" href={paper.links.pdf} />}
            {paper.links.bibtex && <ActionButton icon={<Quote size={16} />} label="BibTeX" onClick={() => alert('BibTeX copied to clipboard (Simulated)')} />}
            {paper.links.code && <ActionButton icon={<Code size={16} />} label="Code" href={paper.links.code} />}
            {paper.links.slides && <ActionButton icon={<MonitorPlay size={16} />} label="Slides" href={paper.links.slides} />}
            {paper.links.arxiv && <ActionButton icon={<Link2 size={16} />} label="arXiv" href={paper.links.arxiv} />}
            {paper.links.poster && <ActionButton icon={<FileImage size={16} />} label="Poster" href={paper.links.poster} />}
        </div>
    </article>
);

const ActionButton: React.FC<{ icon: React.ReactNode; label: string; href?: string; onClick?: () => void }> = ({ icon, label, href, onClick }) => {
    const className = "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted bg-paper rounded-lg border border-line hover:bg-accent-soft hover:text-accent hover:border-accent/30 transition-colors";
    if (href) {
        return <a href={href} target="_blank" rel="noreferrer" className={className}>{icon} {label}</a>;
    }
    return <button onClick={onClick} className={className}>{icon} {label}</button>;
};
