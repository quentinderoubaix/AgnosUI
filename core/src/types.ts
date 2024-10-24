import type {ReadableSignal, StoreOptions, SubscribableStore, WritableSignal} from '@amadeus-it-group/tansu';

export type ValuesOrReadableSignals<T extends object> = {
	[K in keyof T]?: ReadableSignal<T[K] | undefined> | T[K];
};

export type ValuesOrWritableSignals<T extends object> = {
	[K in keyof T]?: WritableSignal<T[K] | undefined> | T[K];
};

export interface PropsConfig<U extends object> {
	/**
	 * Object containing, for each property, either its initial value, or a store that will contain the value at any time.
	 * When the value of a property is undefined or invalid, the value from the config is used.
	 */
	props?: ValuesOrWritableSignals<U>;

	/**
	 * Either a store of objects containing, for each property, the default value,
	 * or an object containing, for each property, either a store containing the default value or the default value itself.
	 */
	config?: ReadableSignal<Partial<U>> | ValuesOrReadableSignals<Partial<U>>;
}

export interface Widget<
	Props extends object = object,
	State extends object = object,
	Api extends object = object,
	Directives extends object = object,
> {
	/**
	 * the reactive state of the widget, combining all the values served by the stores
	 */
	state$: ReadableSignal<State>;
	/**
	 * the different stores of the widget, all reactive
	 */
	stores: {[K in keyof State as `${K & string}$`]: ReadableSignal<State[K]>};

	/**
	 * Modify the parameter values, and recalculate the stores accordingly
	 */
	patch(parameters: Partial<Props>): void;
	/**
	 * directives to be used on html elements in the template of the widget or in the slots
	 */
	directives: Directives;
	/**
	 * all the api functions to interact with the widget
	 */
	api: Api;
}

export interface WidgetSlotContext<W extends Widget> extends Pick<W, 'api' | 'directives'> {
	/**
	 * the state of the widget
	 */
	state: WidgetState<W>;
}

export type WidgetState<T extends {state$: SubscribableStore<any>}> = T extends {state$: SubscribableStore<infer U extends object>} ? U : never;
export type WidgetProps<T extends {patch: (arg: any) => void}> = T extends {patch: (arg: Partial<infer U extends object>) => void} ? U : never;
export type WidgetFactory<W extends Widget> = (props?: PropsConfig<WidgetProps<W>>) => W;

/**
 * Subset of HTMLElement that is available in a server side rendering context.
 */
export interface SSRHTMLElement extends Pick<HTMLElement, 'setAttribute' | 'removeAttribute'> {
	/**
	 * Object allowing to manipulate the classes of the element.
	 */
	classList: Pick<HTMLElement['classList'], 'add' | 'remove' | 'toggle'>;
	/**
	 * Object allowing to manipulate the style of the element.
	 */
	style: Partial<Record<StyleKey, StyleValue>>;
}

export type Directive<T = void, U extends SSRHTMLElement = SSRHTMLElement> = (
	node: U,
	args: T,
) => void | {update?: (args: T) => void; destroy?: () => void};
export type DirectiveAndParam<T, U extends SSRHTMLElement = SSRHTMLElement> = [Directive<T, U>, T];
export type DirectivesAndOptParam<T extends any[], U extends SSRHTMLElement = SSRHTMLElement> = {
	[K in keyof T]: Directive<void, U> | DirectiveAndParam<T[K], U>;
};

export type SlotContent<Props extends object = object> = undefined | null | string | ((props: Props) => string);

export const INVALID_VALUE: unique symbol = Symbol();
export type NormalizeValue<T> = (value: T) => T | typeof INVALID_VALUE;

export interface WritableWithDefaultOptions<T> {
	/**
	 * the normalize value function. should return the invalidValue symbol when the provided value is invalid
	 */
	normalizeValue?: NormalizeValue<T>;
	/**
	 * the equal function, allowing to compare two values. used to check if a previous and current values are equals.
	 */
	equal?: StoreOptions<T>['equal'];
}

export type ConfigValidator<T extends object> = {[K in keyof T]?: WritableWithDefaultOptions<T[K]>};

export type AttributeValue = string | number | boolean | undefined;
export type StyleKey = Exclude<
	keyof CSSStyleDeclaration,
	| 'length'
	| 'item'
	| 'parentRule'
	| 'getPropertyValue'
	| 'getPropertyPriority'
	| 'setProperty'
	| 'removeProperty'
	| typeof Symbol.iterator
	| number
	| 'cssText'
>;
export type StyleValue = string | undefined | null;

export type Extends<T, U> = T extends U ? 1 : 0;
export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;
