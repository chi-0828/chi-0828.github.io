import React from 'react';
import { Paper, PaperType, EducationItem, ExperienceItem, NewsItem, AwardItem } from './types';

export const PROFILE = {
    name: "Liang-Chi Chen",
    role: "Ph.D. Candidate @ NTU",
    description: "Research Area: Memory and Storage systems, Processing-in-Memory, In-Storage Computing.",
    avatarUrl: "./img/me5.jpg",
    email: "d12922012@csie.ntu.edu.tw",
    cvLink: "https://drive.google.com/file/d/1hzd7VcIP-beZHm7quPNHfYLjCkoQpkQz/view?usp=drive_link"
};

export const EDUCATION: EducationItem[] = [
    {
        id: '1',
        school: "National Taiwan University (NTU)",
        degree: "Ph.D. in Computer Science and Information Engineering",
        period: "2023 — Present",
        status: "Ph.D. Candidate (Advanced in Spring 2025)",
        logo: "./img/ntu.jpg"
    },
    {
        id: '2',
        school: "National Cheng Kung University (NCKU)",
        degree: "M.S. in Computer Science and Information Engineering",
        period: "2022 — 2023",
        logo: "./img/ncku.png"
    },
    {
        id: '3',
        school: "National Chung Cheng University (CCU)",
        degree: "B.S. in Computer Science and Information Engineering",
        period: "2018 — 2022",
        logo: "./img/ccu.png"
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: '1',
        role: "Research Intern",
        company: "Institute of Information Science, Academia Sinica (Taipei)",
        period: "Summer 2022",
        description: "Worked on processing-in-memory systems.",
        logo: './img/iislogo.png'
    },
    {
        id: '2',
        role: "SWE Intern",
        company: "Patere Co. (Hsinchu)",
        period: "Summer 2021",
        description: "Object detection and computer vision implementation.",
        logo: './img/patere.png'
    }
];

export const NEWS: NewsItem[] = [
    {
        id: '1',
        date: "2025-11",
        monthYear: "2025-11",
        content: <span>Paper accepted by <strong>DATE 2026</strong> (Processing-in-Memory)</span>
    },
    {
        id: '2',
        date: "2025-05",
        monthYear: "2025-05",
        content: <span>Paper accepted by <strong>ISLPED 2025</strong> (In-Storage Computing)</span>
    },
    {
        id: '3',
        date: "2025-04",
        monthYear: "2025-04",
        content: <span>Paper accepted by <strong>IEEE TC</strong></span>
    }
];

export const AWARDS: AwardItem[] = [
    {
        id: '1',
        title: "Google APAC Student Travel Grant",
        category: "Scholarship",
        description: "for ISLPED 2025"
    },
    {
        id: '2',
        title: "NTU Doctoral Royal Palm Elite Scholarship",
        category: "Scholarship",
        description: "National Taiwan University (up to 4 year)"
    },
    {
        id: '3',
        title: "Best Master Thesis Award",
        category: "Paper",
        description: "IEEE Tainan Section, 2023"
    },
    {
        id: '4',
        title: "Student Thesis Award (Master thesis) ",
        category: "Paper",
        description: "Taiwan Information Storage Association, 2023"
    },
    {
        id: '5',
        title: "Google APAC Student Travel Grant",
        category: "Scholarship",
        description: "for DAC 2023"
    },
    {
        id: '6',
        title: "President Award",
        category: "Scholarship",
        description: "Semester-top Academic Performance in CCU, 2020"
    }
    
];

export const PAPERS: Paper[] = [
    // --- Journal Papers ---
    {
        id: 'j1',
        title: "Accelerating RNA-seq Quantification on a Real Processing-in-Memory System",
        authors: ["Liang-Chi Chen", "Chien-Chung Ho", "Yuan-Hao Chang"],
        venue: "IEEE Transactions on Computers (TC)",
        year: "2025",
        type: PaperType.JOURNAL,
        links: {
            pdf: "https://ieeexplore.ieee.org/abstract/document/10955404"
        }
    },
    {
        id: 'j2',
        title: "A Survey on Flash-Memory Storage Systems: A Host-Side Perspective",
        authors: ["Jalil Boukhobza", "Pierre Oliver", "Wen Sheng Lim", "Liang-Chi Chen", "Yun-Shan Hsieh", "Shin-Ting Wu", "Chien-Chung Ho", "Po-Chun Huang", "Yuan-Hao Chang"],
        venue: "ACM Transactions on Storage (TOS)",
        year: "2025",
        type: PaperType.JOURNAL,
        links: {
            pdf: "https://dl.acm.org/doi/abs/10.1145/3723167"
        }
    },
    {
        id: 'j3',
        title: "WARM-tree: Making Quadtrees Write-efficient and Space-economic on Persistent Memories",
        authors: ["Shin-Ting Wu", "Liang-Chi Chen", "Po-Chun Huang", "Yuan-Hao Chang", "Chien-Chung Ho", "Wei-Kuan Shih"],
        venue: "ACM Transactions on Embedded Computing Systems (TECS)",
        year: "2023",
        type: PaperType.JOURNAL,
        links: {
            pdf: "https://doi.org/10.1145/3608033"
        }
    },
    {
        id: 'j4',
        title: "Reaping Both Latency and Reliability Benefits With Elaborate Sanitization Design for 3D TLC NAND Flash",
        authors: ["Wei-Chen Wang", "Chien-Chung Ho", "Yung-Chun Li", "Liang-Chi Chen", "Yu-Ming Chang"],
        venue: "IEEE Transactions on Computers (TC)",
        year: "2023",
        type: PaperType.JOURNAL,
        links: {
            pdf: "https://ieeexplore.ieee.org/document/10113786/"
        }
    },
    {
        id: 'j5',
        title: "LongPhase: an ultra-fast chromosome-scale phasing algorithm for small and large variants",
        authors: ["Jyun-Hong Lin", "Liang-Chi Chen", "Shu-Chi Yu", "Yao-Ting Huang"],
        venue: "Bioinformatics",
        year: "2022",
        type: PaperType.JOURNAL,
        links: {
            pdf: "https://doi.org/10.1093/bioinformatics/btac058"
        }
    },

    // --- Conference Papers ---
    {
        id: 'c1',
        title: "LAMP: An Adaptive Near-Memory Processing System for High-Performance Long-Read Mapping",
        authors: ["Jo-Ling Huang", "Liang-Chi Chen", "Chien-Chung Ho", "Yuan-Hao Chang"],
        venue: "Design, Automation and Test in Europe (DATE)",
        year: "2026",
        type: PaperType.CONFERENCE,
        tags: ["Top Conf.", "Acceptance rate: 24.8%"],
        links: {} // 尚未提供連結
    },
    {
        id: 'c2',
        title: "Accelerating RNA-Seq Pseudoalignment via NAND Flash-based In-Memory-Searching Architecture",
        authors: ["Guan-De Jiang", "Ying-Sheng Huang", "Liang-Chi Chen", "Chien-Chung Ho"],
        venue: "ACM/SIGAPP Symposium On Applied Computing (SAC)",
        year: "2026",
        type: PaperType.CONFERENCE,
        links: {} // 尚未提供連結
    },
    {
        id: 'c3',
        title: "AridWalk: Efficient Graph Random Walks on a Resource-Limited Computational Storage Device",
        authors: ["Liang-Chi Chen", "Chien-Chung Ho", "Tei-Wei Kuo", "Yuan-Hao Chang"],
        venue: "ACM/IEEE International Symposium on Low Power Electronics and Design (ISLPED)",
        year: "2025",
        type: PaperType.CONFERENCE,
        tags: ["Top Conf."],
        links: {
            pdf: "https://ieeexplore.ieee.org/document/11261766/",
            slides: "https://drive.google.com/file/d/1v73jESazLJCI0EyNty_qxQH0z1Wpqhi0/view?usp=drive_link"
        }
    },
    {
        id: 'c4',
        title: "PIMDup: An Optimized Deduplication Design on a Real Processing-in-Memory System",
        authors: ["Chun-Le Yeh", "Liang-Chi Chen", "Chien-Chung Ho", "Yu-Ming Chang", "Da-Wei Chang"],
        venue: "ACM/IEEE Design Automation Conference (DAC)",
        year: "2025",
        type: PaperType.CONFERENCE,
        tags: ["Top Conf.", "Acceptance rate: 22.6%"],
        links: {
            pdf: "https://ieeexplore.ieee.org/abstract/document/11133045",
            slides: "https://drive.google.com/file/d/1Jf_BP1C35IZJ7l8iFXcV-Or8CgQNvT7V/view?usp=drive_link",
            poster: "https://drive.google.com/file/d/13P8nd0FF5BuSrkGdvRTd3N8lbBNC1Yv1/view?usp=drive_link"
        }
    },
    {
        id: 'c5',
        title: "LifeSqueezer: Increase the Tolerability of Weak Pages for Lifetime Improvement on TLC-based SSDs",
        authors: ["Liang-Chi Chen", "Kun-Chi Chiang", "Chien-Chung Ho", "Yu-Ming Chang", "Chin-Chiang Pan", "Yuan-Hao Chang"],
        venue: "ACM International Conference on Research in Adaptive and Convergent Systems (RACS)",
        year: "2024",
        type: PaperType.CONFERENCE,
        links: {
            pdf: "https://dl.acm.org/doi/abs/10.1145/3649601.3698723",
            slides: "https://drive.google.com/file/d/1_0BeCuYjl1HhHdIRkAOeLEKhQp7Ln9ek/view?usp=sharing"
        }
    },
    {
        id: 'c6',
        title: "WARM-tree: Making Quadtrees Write-efficient and Space-economic on Persistent Memories",
        authors: ["Shin-Ting Wu", "Liang-Chi Chen", "Po-Chun Huang", "Yuan-Hao Chang", "Chien-Chung Ho", "Wei-Kuan Shih"],
        venue: "ACM/IEEE International Conference on Hardware/Software Codesign and System Synthesis (CODES+ISSS)",
        year: "2023",
        type: PaperType.CONFERENCE,
        tags: ["ESWEEK", "Journal Track"],
        links: {
            pdf: "https://doi.org/10.1145/3608033"
        }
    },
    {
        id: 'c7',
        title: "UpPipe: A Novel Pipeline Management on In-Memory Processors for RNA-seq Quantification",
        authors: ["Liang-Chi Chen", "Chien-Chung Ho", "Yuan-Hao Chang"],
        venue: "ACM/IEEE Design Automation Conference (DAC)",
        year: "2023",
        type: PaperType.CONFERENCE,
        tags: ["Top Conf.", "Acceptance rate: 23%"],
        links: {
            pdf: "http://ieeexplore.ieee.org/abstract/document/10247915/",
            slides: "https://drive.google.com/file/d/1XaUErirVkLod5UZwsReGUwLDN2Af026Q/view?usp=drive_link",
            poster: "https://drive.google.com/file/d/1OGtMobOE1xZWm_qes1gTFDT9nAnk1r31/view?usp=drive_link",
            code: "https://github.com/chi-0828/UpPipe"
        }
    },
    {
        id: 'c8',
        title: "Efficient Sanitization Design for LSM-based Key-Value Store over 3D MLC NAND Flash",
        authors: ["Liang-Chi Chen", "Shu-Qi Yu", "Chien-Chung Ho", "Wei-Chen Wang", "Yung-Chun Li"],
        venue: "ACM/SIGAPP Symposium on Applied Computing (SAC)",
        year: "2023",
        type: PaperType.CONFERENCE,
        links: {
            pdf: "https://dl.acm.org/doi/abs/10.1145/3555776.3577780",
            slides: "https://drive.google.com/file/d/19bH_Trm85HtkHarAajefpxZoKSd5CQV3/view?usp=drive_link",
            poster: "https://drive.google.com/file/d/1rnKlQvyG6Q5AiBKUgZVQMs12DnCjlJQO/view?usp=drive_link"
        }
    },
    {
        id: 'c9',
        title: "RNA-seq Quantification on Processing in memory Architecture: Observation and Characterization",
        authors: ["Liang-Chi Chen", "Shu-Qi Yu", "Chien-Chung Ho", "Yuan-Hao Chang", "Da-Wei Chang", "Wei-Chen Wang", "Yu-Ming Chang"],
        venue: "IEEE Non-Volatile Memory Systems and Applications Symposium (NVMSA)",
        year: "2022",
        type: PaperType.CONFERENCE,
        links: {
            pdf: "https://ieeexplore.ieee.org/abstract/document/9898625/",
            slides: "https://drive.google.com/file/d/1BBApsF9JVOiIAwc3cDyd31qJUWnrnZls/view?usp=drive_link",
            code: "https://github.com/chi-0828/RNA-Abundance-Quantification-on-UPMEM"
        }
    },

    // --- Preprints ---
    {
        id: 'p1',
        title: "PIM or CXL-PIM? Understanding Architectural Trade-offs Through Large-Scale Benchmarking",
        authors: ["I-Ting Lee", "Bao-Kai Wang", "Liang-Chi Chen", "Wen Sheng Lim", "Da-Wei Chang", "Yu-Ming Chang", "Chieng-Chung Ho"],
        venue: "arXiv preprint arXiv:2511.14400",
        year: "2025",
        type: PaperType.PREPRINT,
        links: {
            pdf: "https://arxiv.org/pdf/2511.14400"
        }
    }
];