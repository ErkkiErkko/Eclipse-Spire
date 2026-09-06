import {CARDS} from './game-data.ts';
import type {Action, GameState} from './game-engine.ts';

export type HeroActionKind = 'attack' | 'guard' | 'skill' | 'power';
export type HeroAction = {
  serial: number;
  kind: HeroActionKind;
  cue: 'moon' | 'draw' | 'heal' | 'hex' | 'blade';
  hits: number;
  charged: boolean;
};

// Use the accepted card, not incidental relic effects, to choose the gesture.
export function heroActionForPlay(before: GameState, after: GameState, action: Action): HeroAction | null {
  if (action.type !== 'play' || before === after || before.phase !== 'combat') return null;
  const owned = before.combat.hand.find(card => card.uid === action.uid);
  if (!owned) return null;
  const card = CARDS[owned.id];
  if (card.type === 'curse') return null;
  const kind = card.type === 'power' ? 'power' : card.type === 'attack' ? 'attack'
    : card.block || owned.id === 'resolve' ? 'guard' : 'skill';
  const cue = owned.id === 'blade' ? 'blade' : card.draw ? 'draw'
    : owned.id === 'bloom' || owned.id === 'drain' ? 'heal'
    : owned.id === 'thorn' || owned.id === 'bind' ? 'hex' : 'moon';
  return {
    serial: after.serial, kind, cue, hits: card.hits ?? 1,
    charged: (owned.id === 'mooncut' || owned.id === 'nightfall') && before.combat.moon >= 3,
  };
}
