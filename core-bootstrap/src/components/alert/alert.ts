import type {ConfigValidator, Directive, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '@agnos-ui/core/types';
import {createTypeEnum, typeBoolean, typeFunction, typeString} from '@agnos-ui/core/utils/writables';
import {fadeTransition} from '../../services/transitions';
import {BS_CONTEXTUAL_CLASSES, type BSContextualClass} from '../../types';
import {createTransition, type TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {stateStores, writablesForProps} from '@agnos-ui/core/utils/stores';

/**
 * Interface representing the common properties and state for an alert component.
 */
interface AlertCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * If `true`, alert can be dismissed by the user.
	 * The close button (×) will be displayed and you can be notified of the event with the (close) output.
	 *
	 * @defaultValue `true`
	 */
	dismissible: boolean;
	/**
	 * If `true` the alert is visible to the user
	 *
	 * @defaultValue `true`
	 */
	visible: boolean;
	/**
	 * Accessibility close button label
	 *
	 * @defaultValue `'Close'`
	 */
	ariaCloseButtonLabel: string;
	/**
	 * Global template for the alert component
	 */
	structure: SlotContent<AlertContext>;
	/**
	 * Template for the alert content
	 */
	children: SlotContent<AlertContext>;
	/**
	 * Type of the alert, following bootstrap types.
	 *
	 * @defaultValue `'primary'`
	 */
	type: BSContextualClass;
}

/**
 * Represents the context for an Alert component.
 */
export interface AlertContext extends WidgetSlotContext<AlertWidget> {}

/**
 * Represents the state of an alert component.
 */
export interface AlertState extends AlertCommonPropsAndState {
	/**
	 * Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.
	 */
	hidden: boolean;
}
/**
 * Represents the properties for the Alert component.
 */
export interface AlertProps extends AlertCommonPropsAndState {
	/**
	 * Callback called when the alert visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onVisibleChange: (visible: boolean) => void;

	/**
	 * Callback called when the alert is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHidden: () => void;

	/**
	 * Callback called when the alert is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onShown: () => void;

	/**
	 * The transition function will be executed when the alert is displayed or hidden.
	 *
	 * Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.
	 *
	 * @defaultValue
	 * ```ts
	 * async () => {}
	 * ```
	 */
	transition: TransitionFn;

	/**
	 * If `true`, alert opening will be animated.
	 *
	 * Animation is triggered  when the `.open()` function is called
	 * or the visible prop is changed
	 *
	 * @defaultValue `false`
	 */
	animatedOnInit: boolean;
	/**
	 * If `true`, alert closing will be animated.
	 *
	 * Animation is triggered  when clicked on the close button (×),
	 * via the `.close()` function or the visible prop is changed
	 *
	 * @defaultValue `true`
	 */
	animated: boolean;
}

/**
 * Interface representing the API for an alert component.
 */
export interface AlertApi {
	/**
	 * Triggers alert closing programmatically (same as clicking on the close button (×)).
	 */
	close(): void;

	/**
	 * Triggers the alert to be displayed for the user.
	 */
	open(): void;
}

/**
 * Interface representing the directives for an alert component.
 */
export interface AlertDirectives {
	/**
	 * the transition directive, piloting what is the visual effect of going from hidden to visible
	 */
	transitionDirective: Directive;
}

/**
 * Represents an alert widget component.
 */
export type AlertWidget = Widget<AlertProps, AlertState, AlertApi, AlertDirectives>;

const defaultAlertConfig: AlertProps = {
	visible: true,
	dismissible: true,
	ariaCloseButtonLabel: 'Close',
	onVisibleChange: () => {},
	onShown: () => {},
	onHidden: () => {},
	animated: true,
	animatedOnInit: false,
	transition: fadeTransition,
	className: '',
	structure: undefined,
	children: undefined,
	type: 'primary',
};

/**
 * Retrieve a shallow copy of the default Alert config
 * @returns the default Alert config
 */
export function getAlertDefaultConfig(): AlertProps {
	return {...defaultAlertConfig};
}
const alertConfigValidator: ConfigValidator<AlertProps> = {
	type: createTypeEnum(BS_CONTEXTUAL_CLASSES),
	structure: undefined,
	children: undefined,
	transition: typeFunction,
	dismissible: typeBoolean,
	visible: typeBoolean,
	ariaCloseButtonLabel: typeString,
	className: typeString,
	onVisibleChange: typeFunction,
	onHidden: typeFunction,
	onShown: typeFunction,
	animatedOnInit: typeBoolean,
	animated: typeBoolean,
};

/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export function createAlert(config?: PropsConfig<AlertProps>): AlertWidget {
	const [
		{
			transition$,
			animatedOnInit$,
			animated$,
			visible$: requestedVisible$,
			onVisibleChange$,
			onHidden$,
			onShown$,

			...stateProps
		},
		patch,
	] = writablesForProps(defaultAlertConfig, config, alertConfigValidator);

	const transition = createTransition({
		props: {
			transition: transition$,
			visible: requestedVisible$,
			animated: animated$,
			animatedOnInit: animatedOnInit$,
			onVisibleChange: onVisibleChange$,
			onHidden: onHidden$,
			onShown: onShown$,
		},
	});

	const visible$ = transition.stores.visible$;
	const hidden$ = transition.stores.hidden$;
	return {
		...stateStores({...stateProps, visible$, hidden$}),
		patch,
		api: {
			open: transition.api.show,
			close: transition.api.hide,
		},
		directives: {
			transitionDirective: transition.directives.directive,
		},
	};
}
