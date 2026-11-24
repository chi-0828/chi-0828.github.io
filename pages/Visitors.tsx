import React, { useEffect, useRef } from 'react';
import { ExternalLink, Globe2 } from 'lucide-react';
import { VISITORS } from '../constants';

const normalizeSrc = (raw: string): string => {
    const trimmed = raw.trim();
    if (!trimmed) return '';
    return trimmed.startsWith('//') ? `https:${trimmed}` : trimmed;
};

const resolveScriptId = (src: string, explicit?: 'mapmyvisitors' | 'clstr_globe'): 'mapmyvisitors' | 'clstr_globe' => {
    if (explicit) return explicit;
    return src.includes('clstr_globe') || src.includes('globe.js') ? 'clstr_globe' : 'mapmyvisitors';
};

/**
 * Visitor geography & hit counter powered by MapMyVisitors.
 * Mounted persistently inside Layout (see App.tsx) so visits on any route are
 * counted once without reloading or double-counting on route switches.
 */
export const Visitors: React.FC<{ active: boolean }> = ({ active }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const normalizedSrc = normalizeSrc(VISITORS.scriptSrc);
    const scriptId = resolveScriptId(normalizedSrc, VISITORS.scriptId);
    const statsUrl = VISITORS.statsUrl?.trim() ?? '';

    useEffect(() => {
        const el = containerRef.current;
        if (!el || !normalizedSrc) return;
        // Guard against React.StrictMode double invocation so the widget only injects once.
        if (el.dataset.loadedSrc === normalizedSrc) return;

        el.innerHTML = '';
        el.dataset.loadedSrc = normalizedSrc;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = scriptId;
        script.src = normalizedSrc;
        script.async = true;
        el.appendChild(script);
    }, [normalizedSrc, scriptId]);

    // Avoid keeping placeholder instructions in the hidden background DOM before setup.
    if (!normalizedSrc && !active) return null;

    return (
        <div className={active ? 'animate-rise' : ''}>
            <h1 className="font-arial text-3xl font-bold tracking-tight text-ink mb-2">Visitors</h1>
            <p className="text-sm text-muted mb-6">
                Where visitors to this site come from, with live visit counts powered by MapMyVisitors.
            </p>

            {normalizedSrc ? (
                <>
                    <div className="rounded-2xl border border-line bg-surface shadow-soft p-5 sm:p-7">
                        <div
                            ref={containerRef}
                            className="w-full min-h-[260px] flex items-center justify-center overflow-x-auto"
                        />

                        {statsUrl && (
                            <div className="mt-5 pt-4 border-t border-line flex justify-end">
                                <a
                                    href={statsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent bg-accent-soft rounded-lg border border-accent/20 hover:bg-accent hover:text-white transition-colors"
                                >
                                    View detailed visitor stats
                                    <ExternalLink size={12} className="shrink-0" />
                                </a>
                            </div>
                        )}
                    </div>

                    <p className="text-xs text-faint mt-3">
                        Visitor counts and approximate locations are provided by MapMyVisitors and may be hidden by
                        privacy or ad-blocker browser extensions.
                    </p>
                </>
            ) : (
                <div className="rounded-2xl border border-line bg-surface shadow-soft p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent border border-accent/20 flex items-center justify-center shrink-0">
                            <Globe2 size={20} />
                        </div>
                        <div className="min-w-0">
                            <h2 className="font-arial text-base font-bold text-ink">
                                Connect MapMyVisitors to display the visitor map
                            </h2>
                            <p className="text-sm text-muted mt-1 leading-relaxed">
                                This page is ready for your MapMyVisitors embed script and will automatically count
                                visits across all routes once configured.
                            </p>

                            <ol className="mt-4 space-y-2.5 text-sm text-ink/85 list-decimal list-inside leading-relaxed">
                                <li>
                                    Register{' '}
                                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-paper border border-line text-ink">
                                        https://chi-0828.github.io
                                    </code>{' '}
                                    at{' '}
                                    <a
                                        href="https://mapmyvisitors.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
                                    >
                                        mapmyvisitors.com
                                        <ExternalLink size={12} className="shrink-0" />
                                    </a>
                                    .
                                </li>
                                <li>
                                    Choose a <strong>2D Map</strong> or <strong>3D Globe</strong> widget (suggested
                                    palette: accent{' '}
                                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-paper border border-line text-ink">
                                        #3a5a9c
                                    </code>
                                    , light background{' '}
                                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-paper border border-line text-ink">
                                        #ffffff
                                    </code>
                                    ).
                                </li>
                                <li>
                                    Paste the generated{' '}
                                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-paper border border-line text-ink">
                                        &lt;script&gt;
                                    </code>{' '}
                                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-paper border border-line text-ink">
                                        src
                                    </code>{' '}
                                    URL into{' '}
                                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-paper border border-line text-ink">
                                        VISITORS.scriptSrc
                                    </code>{' '}
                                    inside{' '}
                                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-paper border border-line text-ink">
                                        constants.tsx
                                    </code>
                                    .
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
