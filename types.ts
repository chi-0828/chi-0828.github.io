import React from 'react';

export enum PaperType {
    JOURNAL = 'Journal Papers',
    CONFERENCE = 'Conference Papers',
    PREPRINT = 'Preprints & Technical Reports'
}

export interface Paper {
    id: string;
    title: string;
    authors: string[]; // "Liang-Chi Chen" should be highlighted logic
    venue: string;
    year: string;
    type: PaperType;
    tags?: string[];
    links: {
        pdf?: string;
        bibtex?: string;
        code?: string;
        slides?: string;
        arxiv?: string;
        poster?: string;
    };
    note?: string; // e.g., "Under Review"
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
    date: string;
    monthYear: string;
    content: React.ReactNode;
}

export interface AwardItem {
    id: string;
    title: string;
    category: string;
    description: string;
}