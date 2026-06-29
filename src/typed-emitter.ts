import { EventEmitter } from "events";

/**
 * Constrains an event map so every value is a listener function. The generic key/argument typing of
 * {@link TypedEmitter} is built on top of this shape.
 */
export type ListenerSignature<L> = {
  [E in keyof L]: (...args: any[]) => any;
};

/** Fallback event map used when no event map is supplied: any string event, any listener. */
export type DefaultListener = {
  [k: string]: (...args: any[]) => any;
};

/**
 * Type-level overrides applied to {@link TypedEmitter}. The class extends Node's {@link EventEmitter}
 * for its runtime behaviour; this merged interface narrows the inherited (loosely typed) methods to the
 * event map `L`, so event names and listener/emit argument types are checked at compile time.
 */
export interface TypedEmitter<L extends ListenerSignature<L> = DefaultListener> {
  addListener<U extends keyof L>(event: U, listener: L[U]): this;
  prependListener<U extends keyof L>(event: U, listener: L[U]): this;
  prependOnceListener<U extends keyof L>(event: U, listener: L[U]): this;
  removeListener<U extends keyof L>(event: U, listener: L[U]): this;
  removeAllListeners(event?: keyof L): this;
  once<U extends keyof L>(event: U, listener: L[U]): this;
  on<U extends keyof L>(event: U, listener: L[U]): this;
  off<U extends keyof L>(event: U, listener: L[U]): this;
  emit<U extends keyof L>(event: U, ...args: Parameters<L[U]>): boolean;
  eventNames<U extends keyof L>(): U[];
  listenerCount(type: keyof L): number;
  listeners<U extends keyof L>(type: U): L[U][];
  rawListeners<U extends keyof L>(type: U): L[U][];
  getMaxListeners(): number;
  setMaxListeners(n: number): this;
}

/**
 * Node's {@link EventEmitter} typed as a bare constructor. The merged interface above is the sole
 * source of {@link TypedEmitter}'s public signatures; typing the base loosely keeps Node's own
 * (generically typed) overloads from conflicting with the event-map-aware ones during declaration
 * merging.
 */
const TypedEmitterBase: { new (): object } = EventEmitter;

/**
 * A strongly-typed wrapper over Node's {@link EventEmitter}. Runtime behaviour is exactly Node's
 * EventEmitter; the generic event map `L` only narrows the method signatures (see the merged
 * interface above).
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging -- the interface/class merge is intentional: it layers the event-map-aware signatures onto the EventEmitter-backed class.
export class TypedEmitter<L extends ListenerSignature<L> = DefaultListener> extends TypedEmitterBase {
}
