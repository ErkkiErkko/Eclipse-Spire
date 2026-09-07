'use client';
import {useLayoutEffect, useRef} from 'react';
import type {CSSProperties, ReactNode} from 'react';
import {Heart, Layers, Moon, Sparkles, Swords} from 'lucide-react';
import {HERO_ART} from '@/lib/character-art';
import type {HeroAction} from '@/lib/hero-actions';
import {HERO_MOTION_MS, HeroMotionPlayer} from '@/lib/hero-motion-player';

function ActionVfx({action}: {action: HeroAction}) {
  const Sigil = action.cue === 'draw' ? Layers : action.cue === 'heal' ? Heart
    : action.cue === 'blade' ? Swords : action.cue === 'hex' ? Sparkles : Moon;
  return <svg className={`hero-action-vfx action-${action.kind} cue-${action.cue} ${action.charged ? 'is-charged' : ''}`}
    viewBox="0 0 240 360" aria-hidden="true" style={{'--action-duration': `${HERO_MOTION_MS[action.kind]}ms`} as CSSProperties}>
    {action.kind === 'attack' && <>
      <g className="hero-slash"><path className="slash-haze" pathLength="1" d="M38 271 C279 272 299 128 143 105"/><path className="slash-edge" pathLength="1" d="M38 271 C279 272 299 128 143 105"/></g>
      {action.hits > 1 && <g className="hero-slash slash-second"><path className="slash-haze" pathLength="1" d="M50 129 C282 127 292 262 146 287"/><path className="slash-edge" pathLength="1" d="M50 129 C282 127 292 262 146 287"/></g>}
      <g className="hero-strike-sparks"><path d="m209 188 18 -5 M215 205 l23 5 M199 221 l11 17"/></g>
    </>}
    {action.kind === 'guard' && <g className="hero-moon-guard">
      <ellipse className="guard-wash" cx="177" cy="213" rx="57" ry="87"/>
      <path className="guard-rim" pathLength="1" d="M153 127 C244 128 245 294 151 300 M148 142 C224 143 225 283 149 285"/>
      <Moon className="guard-sigil" x="158" y="193" width="38" height="38" strokeWidth="1.3"/>
    </g>}
    {action.kind === 'skill' && <>
      <ellipse className="hero-spell-orbit" cx="118" cy="241" rx="94" ry="24"/>
      <g className="hero-spell-sigil"><Sigil x="150" y="127" width="38" height="38" strokeWidth="1.5"/></g>
      {[0,1,2,3].map(i => <circle key={i} className="hero-mote" cx={65+i*35} cy={267-i%2*36} r={i%2+2.5} style={{'--mote-delay':`${i*35}ms`} as CSSProperties}/>)}
    </>}
    {action.kind === 'power' && <>
      {[0,1,2].map(i => <ellipse key={i} className="hero-power-ring" cx="120" cy={303-i*51} rx={84-i*12} ry="23" style={{'--ring-delay':`${i*45}ms`} as CSSProperties}/>)}
      <g className="hero-power-sigil"><Sigil x="101" y="145" width="38" height="38" strokeWidth="1.3"/></g>
      {[0,1,2,3,4,5].map(i => <circle key={i} className="hero-mote power-mote" cx={40+i*31} cy={285-i%3*28} r={i%2+2} style={{'--mote-delay':`${i*35}ms`} as CSSProperties}/>)}
    </>}
  </svg>;
}

export function HeroMotion({action, impact, enabled, children}: {action: HeroAction | null; impact: number | null; enabled: boolean; children: ReactNode}) {
  const body = useRef<HTMLDivElement>(null), idle = useRef<HTMLImageElement>(null), channel = useRef<HTMLImageElement>(null);
  const player = useRef<HeroMotionPlayer | null>(null);
  const lastAction = useRef<number | null>(null), lastImpact = useRef<number | null>(null);
  useLayoutEffect(() => {
    if (!body.current || !idle.current || !channel.current || typeof body.current.animate !== 'function') return;
    player.current ??= new HeroMotionPlayer(body.current, idle.current, channel.current, node => getComputedStyle(node as Element));
    if (!enabled) {
      player.current.cancel(); lastAction.current = action?.serial ?? null; lastImpact.current = impact; return;
    }
    if (impact !== null && impact !== lastImpact.current) {
      lastImpact.current = impact; player.current.play('hit'); return;
    }
    if (action && action.serial !== lastAction.current) {
      lastAction.current = action.serial;
      player.current.play(action.kind, channel.current.complete && channel.current.naturalWidth > 0);
    } else if (!action) {
      lastAction.current = null; player.current.cancel();
    }
  }, [action, impact, enabled]);
  useLayoutEffect(() => () => player.current?.cancel(), []);
  return <div className="fighter-art hero-motion-stage">
    <div className="hero-breath"><div className="hero-motion-body" ref={body} role="img" aria-label={HERO_ART.alt}>
      <img className="hero-motion-sprite hero-idle-pose" ref={idle} src={HERO_ART.src} alt="" aria-hidden="true" decoding="async" draggable={false}/>
      <img className="hero-motion-sprite hero-channel-pose" ref={channel} src="/assets/characters/hero-channel.webp" alt="" aria-hidden="true" decoding="async" draggable={false}/>
    </div></div>
    {enabled && action && <ActionVfx key={action.serial} action={action}/>}
    {children}
  </div>;
}
