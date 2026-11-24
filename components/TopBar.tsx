import React from 'react';
import { NavLink } from 'react-router-dom';
import { PROFILE } from '../constants';

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink'}`;

export const TopBar: React.FC = () => (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-sm border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 min-h-14 py-2 sm:py-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
            <NavLink to="/" className="font-arial text-[17px] font-bold tracking-tight text-ink shrink-0">
                Liang-Chi Chen
            </NavLink>
            <nav className="flex items-center gap-4 sm:gap-6">
                <NavLink to="/" end className={linkClass}>About</NavLink>
                <NavLink to="/publications" className={linkClass}>Publications</NavLink>
                <NavLink to="/travel" className={linkClass}>Travel</NavLink>
                <NavLink to="/visitors" className={linkClass}>Visitors</NavLink>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={PROFILE.cvLink}
                    className="text-sm text-accent hover:underline underline-offset-4"
                >
                    CV
                </a>
            </nav>
        </div>
    </header>
);
