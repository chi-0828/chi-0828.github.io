import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, Users } from 'lucide-react';
import { FELLOWSHIP, PROFILE } from '../constants';

// Standalone page for the 2026 Google PhD Fellowship, following the official
// sharing guidance: credit Google and Google.org for the cohort funding and
// link to the official announcement and recipients directory.
export const Fellowship: React.FC = () => {
    const { cohort, research } = FELLOWSHIP;

    return (
        <div className="animate-rise">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-8">
                <ArrowLeft size={15} /> Back to About
            </Link>

            <div className="grid md:grid-cols-[260px_minmax(0,1fr)] gap-8 md:gap-11 items-start">
                {/* Sticky left rail: official Fellow card + reference links */}
                <aside className="md:sticky md:top-20">
                    <img
                        src={FELLOWSHIP.cardImage}
                        alt={`${FELLOWSHIP.year} Global Google PhD Fellowships — Selected as a Google PhD Fellow`}
                        width={864}
                        height={1080}
                        decoding="async"
                        className="w-full max-w-[260px] mx-auto md:max-w-none rounded-2xl shadow-soft border border-line"
                    />
                    <div className="mt-4 flex flex-col gap-2 max-w-[260px] mx-auto md:max-w-none">
                        <a href={FELLOWSHIP.blog} target="_blank" rel="noreferrer" className={btn}>
                            <Newspaper size={15} /> Official announcement
                        </a>
                        <a href={FELLOWSHIP.recipients} target="_blank" rel="noreferrer" className={btn}>
                            <Users size={15} /> Recipients directory
                        </a>
                    </div>
                </aside>

                {/* Unified right column: honor intro -> research direction -> challenges -> thanks */}
                <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                        Honors · {FELLOWSHIP.year}
                    </p>
                    <h1 className="font-arial text-3xl sm:text-[34px] font-bold tracking-tight text-ink leading-tight">
                        {FELLOWSHIP.year} Google PhD Fellowship
                    </h1>
                    <p className="text-[14.5px] text-muted mt-2">
                        {FELLOWSHIP.area} · {FELLOWSHIP.region}
                    </p>

                    <div className="mt-6 space-y-3.5 text-[15px] leading-[1.75] text-ink/85">
                        <p>
                            I&apos;m honored to have been selected as a {FELLOWSHIP.year} Google PhD Fellow in{' '}
                            <strong className="text-ink">{FELLOWSHIP.area}</strong>. Supported by Google and Google.org—as
                            part of a global cohort of {cohort.fellows} Fellows across {cohort.countries} countries backed
                            by {cohort.funding} in total funding—this fellowship supports my doctoral research at National
                            Taiwan University.
                        </p>
                        <p>
                            Thank you to my advisors,{' '}
                            <strong className="text-ink">Prof. Tei-Wei Kuo</strong> and{' '}
                            <strong className="text-ink">Prof. Yuan-Hao Chang</strong>, and to{' '}
                            <strong className="text-ink">Prof. Chien-Chung Ho</strong> for their guidance and support.
                            I&apos;m excited to connect with the rest of the Fellows.
                        </p>
                    </div>

                    <section className="mt-7 pt-7 border-t border-line">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-1.5">
                            Research Direction
                        </p>
                        <h2 className="font-arial text-[19px] font-bold tracking-tight text-ink leading-snug">
                            {research.title}
                        </h2>

                        <div className="mt-3.5 space-y-3.5 text-[14.5px] leading-[1.75] text-ink/85">
                            {research.overview.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-faint mb-2">
                                Key Challenges
                            </p>
                            <ul className="divide-y divide-line border-t border-line">
                                {research.challenges.map((c) => (
                                    <li
                                        key={c.label}
                                        className="py-3 grid grid-cols-[26px_1fr] gap-x-3 items-baseline"
                                    >
                                        <span className="font-mono text-[11px] font-semibold text-accent">
                                            {c.label}
                                        </span>
                                        <div>
                                            <h3 className="text-[14px] font-semibold text-ink leading-snug">
                                                {c.title}
                                            </h3>
                                            <p className="text-[13.5px] text-muted leading-relaxed mt-0.5">
                                                {c.detail}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="mt-4 text-[14.5px] leading-[1.75] text-ink/85">
                            {research.impact}
                        </p>
                    </section>

                    <p className="mt-6 text-[13px] text-faint">
                        — {PROFILE.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

const btn =
    'inline-flex items-center justify-center gap-1.5 w-full px-3.5 py-2 text-[13px] font-medium text-accent bg-accent-soft rounded-lg border border-accent/20 ' +
    'hover:bg-[#dce7f8] hover:border-accent/40 transition-colors';
