import React from 'react';
import { Paper, PaperType, EducationItem, ExperienceItem, NewsItem, AwardItem } from './types';

export const PROFILE = {
    name: "Liang-Chi Chen",
    role: "Ph.D. Candidate @ NTU",
    description: "Optimizing Memory and Storage systems for data-intensive applications.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVG3osHzK9l9oZdUyZpY28kllnoqOFwh15--MiLDtxQabxJIGaLLItj7e51NnEDfn77uqKW1pF0UhcZh_Nik93ejwfhl3hXtb8t8fUIzQtDOAWNSAR2Abf5yautfpe3g7InOC0emnHh3E71OSoFrXQbv6wdcYPE_IycWvBl1aiRxuafKeg7ZxALFsdiMRtl8obHY-w4yg_CNrWKiLkxteHvzGr-jRfSaBE1F38gZ-lbfJCcBIfbjR9__Sk2Quvi9umor_8veUaXds",
    email: "#",
    cvLink: "#"
};

export const EDUCATION: EducationItem[] = [
    {
        id: '1',
        school: "National Taiwan University (NTU)",
        degree: "Ph.D. in Computer Science and Information Engineering",
        period: "2023 — Present",
        status: "Ph.D. Candidate (Advanced in Spring 2025)"
    },
    {
        id: '2',
        school: "National Cheng Kung University",
        degree: "M.S. in Computer Science and Information Engineering",
        period: "2022 — 2023"
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: '1',
        role: "Research Intern",
        company: "Academia Sinica (Taipei)",
        period: "Summer 2022",
        description: "Institute of Information Science. Worked on performance analysis for distributed systems.",
        icon: 'science'
    },
    {
        id: '2',
        role: "SWE Intern",
        company: "Patere Co. (Hsinchu)",
        period: "Summer 2021",
        description: "Full-stack development for enterprise internal management tools.",
        icon: 'code'
    }
];

export const NEWS: NewsItem[] = [
    {
        id: '1',
        date: "Nov 2025",
        monthYear: "NOV 2025",
        content: <span>Paper accepted by <strong>DATE 2026</strong> (Processing-in-Memory)</span>
    },
    {
        id: '2',
        date: "May 2025",
        monthYear: "MAY 2025",
        content: <span>Paper accepted by <strong>ISLPED 2025</strong> (In-Storage Computing)</span>
    },
    {
        id: '3',
        date: "Apr 2025",
        monthYear: "APR 2025",
        content: <span>Paper accepted by <strong>IEEE TC</strong></span>
    }
];

export const AWARDS: AwardItem[] = [
    {
        id: '1',
        title: "NTU Doctoral Royal Palm Elite Scholarship",
        category: "Fellowship",
        description: "Prestigious four-year fellowship"
    },
    {
        id: '2',
        title: "Best Master Thesis Award",
        category: "Best Paper",
        description: "IEEE Tainan Section, 2023"
    }
];

export const PAPERS: Paper[] = [
    {
        id: 'j1',
        title: "FlashGraph: Optimizing Graph Analytics for NVMe SSDs",
        authors: ["Y. Wang", "Liang-Chi Chen", "J. Doe", "S. Smith"],
        venue: "IEEE Transactions on Computers (TC)",
        year: "2025",
        type: PaperType.JOURNAL,
        tags: ["CCF-A"],
        links: { pdf: "#", bibtex: "#", code: "#" }
    },
    {
        id: 'j2',
        title: "Deduplication in Virtualized Memory Systems: A Survey",
        authors: ["Liang-Chi Chen", "P. Professor"],
        venue: "ACM Transactions on Storage (TOS)",
        year: "2024",
        type: PaperType.JOURNAL,
        links: { pdf: "#", bibtex: "#" }
    },
    {
        id: 'c1',
        title: "Near-Data Processing Architectures for Database Scans",
        authors: ["T. Lin", "Liang-Chi Chen", "A. Researcher"],
        venue: "Design Automation Conference (DAC)",
        year: "2024",
        type: PaperType.CONFERENCE,
        tags: ["Top Conf."],
        links: { pdf: "#", bibtex: "#", slides: "#" }
    },
    {
        id: 'c2',
        title: "Energy-Efficient Cache Replacement for Mobile Devices",
        authors: ["Liang-Chi Chen", "S. Lee", "K. Wang"],
        venue: "ISLPED",
        year: "2023",
        type: PaperType.CONFERENCE,
        links: { pdf: "#", bibtex: "#" }
    },
    {
        id: 'p1',
        title: "Advancing In-Memory Computing: A Comprehensive Survey",
        authors: ["Liang-Chi Chen"],
        venue: "arXiv Preprint",
        year: "2025",
        type: PaperType.PREPRINT,
        note: "Under Review",
        links: { pdf: "#", arxiv: "#" }
    }
];