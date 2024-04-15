import {Portal} from '@agnos-ui/react-headless/utils/portal';
import type {AdaptSlotContentProps, AdaptWidgetSlots, PropsConfig, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '../../config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {PropsWithChildren, Ref, RefAttributes} from 'react';
import ReactDOM from 'react-dom/client';
import {forwardRef, useImperativeHandle} from 'react';
import {createModal as coreCreateModal} from '@agnos-ui/core-bootstrap/components/modal';
import type {ModalApi} from '@agnos-ui/core-bootstrap/components/modal';

export * from '@agnos-ui/core-bootstrap/components/modal';

export type ModalWidget<Data> = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/modal').ModalWidget<Data>>;
export type ModalProps<Data> = WidgetProps<ModalWidget<Data>>;
export type ModalState<Data> = WidgetState<ModalWidget<Data>>;
export type ModalContext<Data> = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/modal').ModalContext<Data>>;
export const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = coreCreateModal as any;

const DefaultSlotHeader = <Data,>(slotContext: ModalContext<Data>) => {
	const refCloseButton = useDirective(slotContext.widget.directives.closeButtonDirective);
	return (
		<>
			<h5 className="modal-title">
				<Slot slotContent={slotContext.state.slotTitle} props={slotContext} />
			</h5>
			{slotContext.state.closeButton && <button className="btn-close" {...refCloseButton} />}
		</>
	);
};

const DefaultSlotStructure = <Data,>(slotContext: ModalContext<Data>) => (
	<>
		{slotContext.state.slotTitle && (
			<div className="modal-header">
				<Slot slotContent={slotContext.state.slotHeader} props={slotContext} />
			</div>
		)}
		<div className="modal-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
		</div>
		{slotContext.state.slotFooter && (
			<div className="modal-footer">
				<Slot slotContent={slotContext.state.slotFooter} props={slotContext} />
			</div>
		)}
	</>
);

const defaultConfig: Partial<ModalProps<any>> = {
	slotHeader: DefaultSlotHeader,
	slotStructure: DefaultSlotStructure,
};

export const Modal = forwardRef(function Modal<Data>(props: PropsWithChildren<Partial<ModalProps<Data>>>, ref: Ref<ModalApi<Data>>) {
	const [state, widget] = useWidgetWithConfig(createModal<Data>, props, 'modal', {...defaultConfig, slotDefault: props.children});
	useImperativeHandle(ref, () => widget.api, []);
	const refSetBackdrop = useDirective(widget.directives.backdropDirective);
	const refSetModal = useDirective(widget.directives.modalDirective);
	const slotContext: ModalContext<Data> = {
		state,
		widget: toSlotContextWidget(widget),
	};
	return (
		<Portal container={state.container}>
			{!state.backdropHidden && <div className={`modal-backdrop`} {...refSetBackdrop} />}
			{!state.hidden && (
				<div className={`modal d-block`} {...refSetModal}>
					<div className="modal-dialog">
						<div className="modal-content">
							<Slot slotContent={state.slotStructure} props={slotContext} />
						</div>
					</div>
				</div>
			)}
		</Portal>
	);
}) as <Data>(props: PropsWithChildren<Partial<ModalProps<Data>>> & RefAttributes<ModalApi<Data>>) => JSX.Element;

export async function openModal<Data>(options: Partial<ModalProps<Data>>) {
	const root = ReactDOM.createRoot(document.createElement('div'));
	try {
		const api = await new Promise<ModalApi<Data> | null>((resolve) => {
			root.render(<Modal {...options} ref={resolve} />);
		});
		return await api!.open();
	} finally {
		root.unmount();
	}
}