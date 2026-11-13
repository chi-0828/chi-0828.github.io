import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, Users } from 'lucide-react';
import { FELLOWSHIP, PROFILE } from '../constants';

// Small standalone page for the 2026 Google PhD Fellowship, following the
// official sharing guidance: credit Google and Google.org for the cohort
// funding and point to the official blog post and recipients directory.
export const Fellowship: React.FC = () => {
    const { cohort } = FELLOWSHIP;
    const stats = [
        { value: String(cohort.fellows), label: 'new Fellows' },
        { value: String(cohort.countries), label: 'countries' },
        { value: cohort.funding, label: 'cohort funding' },
    ];

    return (
        <div className="animate-rise">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-8">
                <ArrowLeft size={15} /> Back to About
            </Link>

            <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-8 md:gap-10 items-start">
                <img
                    src={FELLOWSHIP.cardImage}
                    alt={`${FELLOWSHIP.year} Global Google PhD Fellowships — Selected as a Google PhD Fellow`}
                    width={864}
                    height={1080}
                    decoding="async"
                    className="w-full max-w-[300px] mx-auto md:max-w-none rounded-2xl shadow-soft border border-line"
                />

                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">Honors · {FELLOWSHIP.year}</p>
                    <h1 className="font-arial text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">
                        {FELLOWSHIP.year} Google PhD Fellowship
                    </h1>
                    <p className="text-[14.5px] text-muted mt-2">
                        {FELLOWSHIP.area} · {FELLOWSHIP.region}
                    </p>

                    <div className="mt-6 space-y-4 text-[15.5px] leading-[1.75] text-ink/85">
                        <p>
                            I&apos;m honored to have been selected as a {FELLOWSHIP.year} Google PhD Fellow in{' '}
                            <strong className="text-ink">{FELLOWSHIP.area}</strong>.
                        </p>
                        <p>
                            The Google PhD Fellowship, supported by Google.org, provides funding for my doctoral research at
                            National Taiwan University on Processing-in-Memory and In-Storage Computing accelerators, which move
                            computation closer to where data lives to make data-intensive applications faster and more
                            energy-efficient.
                        </p>
                        <p>
                            I&apos;m one of {cohort.fellows} new Fellows across {cohort.countries} countries this year. Thank you to my
                            advisors and lab for their support, and I&apos;m excited to connect with the rest of the Fellows.
                        </p>
                    </div>

                    <dl className="grid grid-cols-3 gap-3 mt-7">
                        {stats.map((s) => (
                            <div key={s.label} className="rounded-xl border border-line bg-surface px-3 py-3 text-center">
                                <dt className="sr-only">{s.label}</dt>
                                <dd>
                                    <span className="block font-arial text-2xl font-bold text-accent">{s.value}</span>
                                    <span className="block text-[12px] text-muted mt-0.5">{s.label}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <p className="text-[12px] text-faint mt-2">
                        The {FELLOWSHIP.year} cohort is supported by {cohort.funding} in total funding from Google and Google.org.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-7">
                        <a href={FELLOWSHIP.blog} target="_blank" rel="noreferrer" className={btn}>
                            <Newspaper size={16} /> Official announcement
                        </a>
                        <a href={FELLOWSHIP.recipients} target="_blank" rel="noreferrer" className={btn}>
                            <Users size={16} /> Recipients directory
                        </a>
                    </div>

                    <p className="text-[13px] text-muted mt-8">
                        — {PROFILE.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

const btn =
    'inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-accent bg-accent-soft rounded-lg border border-accent/20 ' +
    'hover:bg-accent hover:text-white transition-colors';
