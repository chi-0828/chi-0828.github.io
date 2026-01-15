import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    School, 
    Briefcase, 
    Bell, 
    Trophy, 
    BookOpen, 
    FileText, 
    Mail, 
    Github,
    Linkedin,
    GraduationCap,
    ArrowRight 
} from 'lucide-react';
import { PROFILE } from '../constants';

interface SidebarProps {
    className?: string;
    onNavClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = "", onNavClick }) => {
    return (
        <aside className={`flex flex-col h-full bg-white border-r border-slate-200 overflow-y-auto custom-scrollbar ${className}`}>
            <div className="p-8 flex flex-col items-center text-center flex-grow">
                {/* Profile Image */}
                <div className="relative mb-6">
                    <img 
                        src={PROFILE.avatarUrl} 
                        alt="Profile" 
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-4 border-slate-50"
                    />
                </div>

                {/* Name & Title */}
                <h1 className="text-2xl font-extrabold tracking-tight mb-1 text-slate-900">
                    {PROFILE.name}
                </h1>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    {PROFILE.role}
                </p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {PROFILE.description}
                </p>

                {/* CV Button */}
                <a 
                    target="_blank"
                    href={PROFILE.cvLink}
                    className="w-full bg-slate-800 text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all shadow-md mb-8"
                >
                    <FileText size={16} />
                    CV (PDF)
                </a>

                {/* Navigation */}
                <nav className="w-full space-y-1 mb-8">
                    <NavItem to="/" hash="#education" icon={<School size={20} />} label="Education" onClick={onNavClick} />
                    <NavItem to="/" hash="#experience" icon={<Briefcase size={20} />} label="Experience" onClick={onNavClick} />
                    <NavItem to="/" hash="#news" icon={<Bell size={20} />} label="Latest News" onClick={onNavClick} />
                    <NavItem to="/" hash="#awards" icon={<Trophy size={20} />} label="Awards" onClick={onNavClick} />
                    
                    <NavLink 
                        to="/publications" 
                        onClick={onNavClick}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-2.5 text-sm font-bold rounded-lg transition-colors group shadow-sm mt-4
                            ${isActive 
                                ? 'bg-slate-100 text-slate-900' 
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <BookOpen size={20} className={isActive ? 'text-slate-800' : 'text-slate-500 group-hover:text-slate-800'} />
                                <span>Publications</span>
                                <ArrowRight size={16} className="ml-auto text-slate-400 group-hover:text-slate-800" />
                            </>
                        )}
                    </NavLink>
                </nav>
            </div>

            {/* Footer */}
            <div className="mt-auto p-6 border-t border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-center gap-4">
                    <a 
                        href={`mailto:${PROFILE.email}`} 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-200 transition-colors shadow-sm" 
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                    <a 
                        target="_blank"
                        href="https://github.com/chi-0828"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-black-700 hover:bg-slate-700 transition-colors shadow-sm" 
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a 
                        target="_blank"
                        href="https://scholar.google.com.tw/citations?user=SoyMWUsAAAA" 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors shadow-sm" 
                        aria-label="Google Scholar"
                    >
                        <GraduationCap size={18} />
                    </a>
                    <a 
                        target="_blank"
                        href="https://www.linkedin.com/in/liang-chi-chen-882a531b9" 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors shadow-sm" 
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>
                <div className="text-center mt-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Contact Information</span>
                </div>
            </div>
        </aside>
    );
};

interface NavItemProps {
    to: string;
    hash?: string;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, hash, icon, label, onClick }) => {
    // Simple logic to scroll to element if on home page
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) onClick();
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <NavLink 
            to={to} 
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group"
            onClick={handleClick}
        >
            <span className="text-slate-400 group-hover:text-slate-700 transition-colors">{icon}</span>
            {label}
        </NavLink>
    );
};