import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import CloseIcon from '@agnos-ui/common/samples/common/close_icon.svg?react';
import type {PropsWithChildren} from 'react';
import {createTransition} from '@agnos-ui/react-headless/services/transitions/baseTransitions';
import {useWidget} from '@agnos-ui/react-headless/utils/widget';
import type {Directive} from '@agnos-ui/react-headless/types';

type DaisyAlertType = 'info' | 'success' | 'error' | 'warning';

const AlertContent = ({
	dismissible = true,
	ariaCloseButtonLabel = 'Close',
	type = 'success',
	children,
	onClose,
	directive,
}: PropsWithChildren<{
	directive: Directive;
	type?: DaisyAlertType;
	ariaCloseButtonLabel?: string;
	dismissible?: boolean;
	onClose: () => void;
}>) => (
	<div role="alert" className={`flex alert alert-${type}`} {...useDirective(directive)}>
		{children}
		{dismissible && (
			<button className="btn btn-sm btn-circle btn-ghost ms-auto" onClick={onClose} aria-label={`${ariaCloseButtonLabel}`}>
				<CloseIcon />
			</button>
		)}
	</div>
);

export const Alert = ({
	visible = true,
	onVisibleChange,
	children,
	...props
}: PropsWithChildren<{
	visible?: boolean;
	onVisibleChange?: (visible: boolean) => void;
	dismissible?: boolean;
	ariaCloseButtonLabel?: string;
	type?: DaisyAlertType;
}>) => {
	const transition = createSimpleClassTransition({
		showClasses: ['transition-opacity'],
		hideClasses: ['opacity-0'],
		animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
	});

	const widget = useWidget(createTransition, {visible, onVisibleChange}, {config: {transition}});
	return (
		<>
			{!widget.state.hidden && (
				<AlertContent {...props} directive={widget.directives.directive} onClose={() => widget.api.hide()}>
					{children}
				</AlertContent>
			)}
		</>
	);
};
