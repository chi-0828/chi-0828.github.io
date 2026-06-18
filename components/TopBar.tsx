import React from 'react';
import { NavLink } from 'react-router-dom';
import { PROFILE } from '../constants';

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink'}`;

export const TopBar: React.FC = () => (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-sm border-b border-line">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
            <NavLink to="/" className="font-arial text-[17px] font-bold tracking-tight text-ink">
                Liang-Chi Chen
            </NavLink>
            <nav className="flex items-center gap-6">
                <NavLink to="/" end className={linkClass}>About</NavLink>
                <NavLink to="/publications" className={linkClass}>Publications</NavLink>
                <NavLink to="/travel" className={linkClass}>Travel</NavLink>
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
