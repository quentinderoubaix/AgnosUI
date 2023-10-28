import type {ModalContext, ModalProps} from '@agnos-ui/react-headless';
import {Portal, Slot, createModal, toSlotContextWidget, useDirective, useWidgetWithConfig} from '@agnos-ui/react-headless';
import type {PropsWithChildren} from 'react';
import {forwardRef, useImperativeHandle} from 'react';

const DefaultSlotHeader = (slotContext: ModalContext) => (
	<>
		<h5 className="modal-title">
			<Slot slotContent={slotContext.state.slotTitle} props={slotContext} />
		</h5>
		{!slotContext.state.closeButton ? null : (
			<button
				type="button"
				className="btn-close"
				aria-label={slotContext.state.ariaCloseButtonLabel}
				onClick={slotContext.widget.actions.closeButtonClick}
			/>
		)}
	</>
);

const DefaultSlotStructure = (slotContext: ModalContext) => (
	<>
		{!slotContext.state.slotTitle ? null : (
			<div className="modal-header">
				<Slot slotContent={slotContext.state.slotHeader} props={slotContext}></Slot>
			</div>
		)}
		<div className="modal-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
		</div>
		{!slotContext.state.slotFooter ? null : (
			<div className="modal-footer">
				<Slot slotContent={slotContext.state.slotFooter} props={slotContext} />
			</div>
		)}
	</>
);

const defaultConfig: Partial<ModalProps> = {
	slotHeader: DefaultSlotHeader,
	slotStructure: DefaultSlotStructure,
};

export const Modal = forwardRef(function Modal(props: PropsWithChildren<Partial<ModalProps>>, ref) {
	const [state, widget] = useWidgetWithConfig(createModal, props, 'modal', {...defaultConfig, slotDefault: props.children});
	useImperativeHandle(ref, () => widget.api, []);
	const refSetBackdrop = useDirective(widget.directives.backdropDirective);
	const refSetModal = useDirective(widget.directives.modalDirective);
	const slotContext: ModalContext = {
		state,
		widget: toSlotContextWidget(widget),
	};
	return (
		<>
			<Portal container={state.container}>
				{state.backdropHidden ? null : <div className={`modal-backdrop ${state.backdropClass}`} ref={refSetBackdrop} />}
				{state.hidden ? null : (
					<div className={`modal d-block ${state.className}`} ref={refSetModal} onClick={widget.actions.modalClick}>
						<div className="modal-dialog">
							<div className="modal-content">
								<Slot slotContent={state.slotStructure} props={slotContext} />
							</div>
						</div>
					</div>
				)}
			</Portal>
		</>
	);
});