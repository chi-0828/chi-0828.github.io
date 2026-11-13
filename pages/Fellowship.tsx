import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, Users } from 'lucide-react';
import { FELLOWSHIP, PROFILE } from '../constants';

// Small standalone page for the 2026 Google PhD Fellowship, following the
// official sharing guidance: credit Google and Google.org for the cohort
// funding and point to the official blog post and recipients directory.
export const Fellowship: React.FC = () => {
    const { cohort } = FELLOWSHIP;

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
                            I&apos;m one of {cohort.fellows} new Fellows across {cohort.countries} countries this year, a cohort
                            supported by {cohort.funding} in total funding from Google and Google.org. Thank you to my advisors,{' '}
                            <strong className="text-ink">Prof. Tei-Wei Kuo</strong> and{' '}
                            <strong className="text-ink">Prof. Yuan-Hao Chang</strong>, and to{' '}
                            <strong className="text-ink">Prof. Chien-Chung Ho</strong> for their support. I&apos;m
                            excited to connect with the rest of the Fellows.
                        </p>
                    </div>


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
