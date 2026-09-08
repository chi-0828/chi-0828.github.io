import React from 'react';
import { Mail, Github, GraduationCap, Linkedin } from 'lucide-react';
import { EDUCATION, EXPERIENCE, NEWS, AWARDS, PROFILE } from '../constants';

const contacts = [
    { href: `mailto:${PROFILE.email}`, icon: Mail, label: 'Email', ext: false },
    { href: 'https://github.com/chi-0828', icon: Github, label: 'GitHub', ext: true },
    { href: 'https://scholar.google.com.tw/citations?user=SoyMWUsAAAA', icon: GraduationCap, label: 'Scholar', ext: true },
    { href: 'https://www.linkedin.com/in/liang-chi-chen-882a531b9', icon: Linkedin, label: 'LinkedIn', ext: true },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-3 mb-6">
        <span className="w-1.5 h-5 rounded-full bg-accent" />
        <h2 className="font-arial text-lg font-bold tracking-tight text-ink uppercase">{children}</h2>
    </div>
);

// One timeline entry: date on the left, a node on the rail, content on the right.
const TimelineItem: React.FC<{ date: string; children: React.ReactNode }> = ({ date, children }) => (
    <div className="grid grid-cols-[58px_1fr] sm:grid-cols-[96px_1fr] gap-x-3 sm:gap-x-5">
        <div className="text-right pt-3">
            <span className="font-mono text-[11px] sm:text-xs text-faint leading-tight">{date}</span>
        </div>
        <div className="relative border-l border-line pl-5 sm:pl-7 pb-5 last:pb-0">
            <span className="absolute -left-[5px] top-3.5 w-2.5 h-2.5 rounded-full bg-surface border-2 border-accent" />
            {children}
        </div>
    </div>
);

const cardClass =
    'group relative flex items-start gap-3.5 rounded-xl border border-line bg-surface px-4 py-3 ' +
    'transition-all duration-200 cursor-default ' +
    'hover:bg-[#dce7f8] hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1';

export const Home: React.FC = () => {
    return (
        <div className="animate-rise">
            {/* Intro — fills the width */}
            <section className="flex flex-col sm:flex-row sm:items-center gap-7 mb-9">
                <img
                    src={PROFILE.avatarUrl}
                    alt="Liang-Chi Chen"
                    width={128}
                    height={128}
                    decoding="async"
                    // @ts-ignore - valid HTML attribute
                    fetchpriority="high"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-center shadow-soft shrink-0"
                />
                <div>
                    <h1 className="font-arial text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-none">
                        Liang-Chi Chen
                    </h1>
                    <p className="font-arial text-[15px] text-muted mt-2.5">
                        Ph.D. Candidate · National Taiwan University
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        {contacts.map(({ href, icon: Icon, label, ext }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                                className="text-faint hover:text-accent transition-colors"
                            >
                                <Icon size={19} strokeWidth={1.75} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <p className="text-[15.5px] leading-[1.75] text-ink/85 max-w-3xl mb-14">
                I am currently a PhD Candidate at National Taiwan University, specializing in Embedded
                Systems and Memory/Storage Systems/Devices. My PhD research focuses on Processing-in-Memory
                (PIM) and In-Storage Computing accelerators. I also work on optimizations for NAND flash,
                emerging NVM (e.g., ReRAM or persistent memory), and CXL systems.
            </p>

            {/* Education */}
            <section className="mb-14">
                <SectionTitle>Education</SectionTitle>
                <div>
                    {EDUCATION.map((edu) => (
                        <TimelineItem key={edu.id} date={edu.period}>
                            <div className={cardClass}>
                                <img src={edu.logo} alt={edu.school} loading="lazy" decoding="async" width={40} height={40} className="w-10 h-10 rounded-md object-contain bg-white border border-line p-1 shrink-0" />
                                <div className="min-w-0">
                                    <h3 className="text-[15px] font-semibold text-ink group-hover:text-accent transition-colors">{edu.school}</h3>
                                    <p className="text-[14px] text-muted group-hover:text-ink mt-0.5 transition-colors">{edu.degree}</p>
                                    {edu.status && <p className="text-[13px] text-accent mt-1">{edu.status}</p>}
                                </div>
                            </div>
                        </TimelineItem>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="mb-14">
                <SectionTitle>Experience</SectionTitle>
                <div>
                    {EXPERIENCE.map((exp) => (
                        <TimelineItem key={exp.id} date={exp.period}>
                            <div className={cardClass}>
                                <img src={exp.logo} alt={exp.company} loading="lazy" decoding="async" width={40} height={40} className="w-10 h-10 rounded-md object-contain bg-white border border-line p-1 shrink-0" />
                                <div className="min-w-0">
                                    <h3 className="text-[15px] font-semibold text-ink group-hover:text-accent transition-colors">{exp.role}</h3>
                                    <p className="text-[14px] text-muted group-hover:text-ink mt-0.5 transition-colors">{exp.company}</p>
                                    <p className="text-[14px] text-ink/70 group-hover:text-ink mt-1 leading-relaxed transition-colors">{exp.description}</p>
                                </div>
                            </div>
                        </TimelineItem>
                    ))}
                </div>
            </section>

            {/* News */}
            <section className="mb-14">
                <SectionTitle>News</SectionTitle>
                <div>
                    {NEWS.map((item) => (
                        <TimelineItem key={item.id} date={item.monthYear}>
                            <p className="text-[14.5px] text-ink/85 leading-relaxed pt-2">{item.content}</p>
                        </TimelineItem>
                    ))}
                </div>
            </section>

            {/* Awards */}
            <section>
                <SectionTitle>Honors &amp; Awards</SectionTitle>

                <ul className="divide-y divide-line">
                    {AWARDS.map((award) => (
                        <li key={award.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-4 gap-y-0.5 py-3.5">
                            <div className="min-w-0">
                                {/* Flagship honors stay in the same row rhythm — only weight and color change. */}
                                <p className={award.featured ? 'text-[14.5px] font-bold text-accent leading-snug' : 'text-[14.5px] text-ink leading-snug'}>
                                    {award.title}
                                </p>
                                {award.description && (
                                    <p className={award.featured ? 'text-[13px] text-accent/80 italic' : 'text-[13px] text-muted italic'}>
                                        {award.description}
                                    </p>
                                )}
                            </div>
                            <div className="sm:text-right shrink-0">
                                <span className={award.featured ? 'font-mono text-xs font-semibold text-accent' : 'font-mono text-xs text-faint'}>{award.year}</span>
                                <p className={award.featured ? 'text-[13px] font-medium text-accent/90' : 'text-[13px] text-muted'}>{award.issuer}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};
