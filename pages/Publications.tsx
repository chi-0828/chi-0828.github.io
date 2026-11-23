import React from 'react';
import { ExternalLink, Trophy } from 'lucide-react';
import { PAPERS, PROFILE, PUB_TOPICS } from '../constants';
import { Paper, PubTopic } from '../types';

const resolve = (ids: string[]): Paper[] =>
    ids.map((id) => PAPERS.find((p) => p.id === id)).filter((p): p is Paper => Boolean(p));

export const Publications: React.FC = () => (
    <div className="animate-rise">
        <h1 className="font-arial text-3xl font-bold tracking-tight text-ink mb-1">Publications</h1>
        <p className="text-sm text-muted mb-8">
            Selected papers, grouped by research topic.
            <a
                href={PROFILE.links.scholar}
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center gap-1 text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
            >
                Full publication list on Google Scholar
                <ExternalLink size={12} className="shrink-0" />
            </a>
        </p>

        {PUB_TOPICS.map((topic) => (
            <TopicSection key={topic.key} topic={topic} />
        ))}
    </div>
);

const TopicSection: React.FC<{ topic: PubTopic }> = ({ topic }) => {
    const conference = resolve(topic.conference);
    const journal = resolve(topic.journal);
    return (
        <section className="mb-10">
            <div className="mb-3">
                <h2 className="font-arial text-lg font-bold text-ink flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-accent rounded-full" />
                    {topic.title}
                </h2>
                <p className="text-xs text-muted ml-3.5">{topic.description}</p>
            </div>

            {conference.length > 0 && <PaperGroup label="Conferences" papers={conference} />}
            {journal.length > 0 && <PaperGroup label="Transactions & Journals" papers={journal} />}
        </section>
    );
};

const PaperGroup: React.FC<{ label: string; papers: Paper[] }> = ({ label, papers }) => (
    <div className="mb-3 last:mb-0">
        <p className="text-[11px] font-bold uppercase tracking-widest text-faint mb-1.5 ml-1">{label}</p>
        <ul className="bg-surface rounded-xl border border-line divide-y divide-line overflow-hidden">
            {papers.map((paper) => (
                <PaperRow key={paper.id} paper={paper} />
            ))}
        </ul>
    </div>
);

const PaperRow: React.FC<{ paper: Paper }> = ({ paper }) => (
    <li className="px-4 py-2.5 hover:bg-accent-soft/60 transition-colors">
        <h3 className="text-[14.5px] font-semibold text-ink leading-snug">{paper.title}</h3>

        <p className="text-[12.5px] text-muted leading-snug mt-0.5">
            {paper.authors.map((author, i) => (
                <span key={i}>
                    {author === PROFILE.name ? <strong className="text-ink font-bold">{author}</strong> : author}
                    {i < paper.authors.length - 1 ? ', ' : '.'}
                </span>
            ))}
        </p>

        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-1 text-xs">
            <span className="font-serif text-[13.5px] font-semibold text-accent">{paper.venue}</span>
            {paper.year && <span className="font-serif text-[13.5px] font-semibold text-ink">{paper.year}</span>}
            {paper.tags?.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 text-[10.5px] text-red-400 whitespace-nowrap">
                    <Trophy size={10} className="text-red-400" /> {tag}
                </span>
            ))}
            {paper.note && (
                <span className="inline-flex px-1.5 py-px rounded text-[10.5px] font-bold bg-accent-soft text-accent border border-accent/20 whitespace-nowrap">
                    {paper.note}
                </span>
            )}
            <span className="flex flex-wrap gap-1.5 ml-auto">
                {paper.links.pdf && <LinkChip label="PDF" href={paper.links.pdf} />}
                {paper.links.code && <LinkChip label="Code" href={paper.links.code} />}
                {paper.links.slides && <LinkChip label="Slides" href={paper.links.slides} />}
                {paper.links.arxiv && <LinkChip label="arXiv" href={paper.links.arxiv} />}
                {paper.links.poster && <LinkChip label="Poster" href={paper.links.poster} />}
            </span>
        </div>
    </li>
);

const LinkChip: React.FC<{ label: string; href: string }> = ({ label, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="px-2 py-px text-[11px] font-medium text-muted bg-paper rounded border border-line hover:bg-accent-soft hover:text-accent hover:border-accent/30 transition-colors"
    >
        {label}
    </a>
);
