import React from 'react';

export enum PaperType {
    JOURNAL = 'Journal Papers',
    CONFERENCE = 'Conference Papers',
    PREPRINT = 'Preprints & Technical Reports'
}

export interface Paper {
    id: string;
    title: string;
    authors: string[]; // entries equal to PROFILE.name are highlighted
    venue: string;
    year: string;
    type: PaperType;
    tags?: string[];
    links: {
        pdf?: string;
        code?: string;
        slides?: string;
        arxiv?: string;
        poster?: string;
    };
    note?: string; // e.g., "Under Review"
}

export interface PubTopic {
    key: string;
    title: string;
    description: string;
    conference: string[];   // paper ids shown under "Conferences", newest first
    journal: string[];      // paper ids shown under "Transactions & Journals", newest first
}

export interface EducationItem {
    id: string;
    school: string;
    degree: string;
    period: string;
    status?: string;
    details?: string;
    logo: string;
}

export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    location?: string;
    period: string;
    description: string;
    logo: string;
}

export interface NewsItem {
    id: string;
    date: string; // YYYY-MM, shown on the timeline rail
    content: React.ReactNode;
}

export interface AwardItem {
    id: number;
    title: string;
    description: string;
    year: string;
    issuer: string;
    count?: number; // number of times received when consolidated (e.g. recurring travel grants)
    featured?: boolean; // flagship honors are emphasised in the list
    page?: string; // internal route; the title links here when set
    links?: { label: string; href: string }[]; // external references shown under the description
}

export interface AwardGroup {
    key: string;
    title: string;
    awards: AwardItem[];
}

export interface VisitorConfig {
    scriptSrc: string;
    scriptId?: 'mapmyvisitors' | 'clstr_globe';
    statsUrl?: string;
}
