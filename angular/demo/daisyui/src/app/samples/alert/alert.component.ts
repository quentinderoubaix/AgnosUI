import {
	BaseWidgetDirective,
	type TransitionWidget,
	UseDirective,
	auBooleanAttribute,
	callWidgetFactory,
	createSimpleClassTransition,
	createTransition,
} from '@agnos-ui/angular-headless';

import {ChangeDetectionStrategy, Component, inject, input, model, output} from '@angular/core';
import closeIcon from '@agnos-ui/common/samples/common/close_icon.svg';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-alert',
	imports: [UseDirective],
	template: `
		@if (!state.hidden()) {
			<div role="alert" class="flex alert alert-{{ type() }}" [auUse]="directives.directive">
				<ng-content />
				@if (dismissible()) {
					<button
						class="btn btn-sm btn-circle btn-ghost ms-auto"
						(click)="api.hide()"
						[attr.aria-label]="ariaCloseButtonLabel()"
						[innerHTML]="closeIcon"
					></button>
				}
			</div>
		}
	`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent extends BaseWidgetDirective<TransitionWidget> {
	readonly closeIcon = inject(DomSanitizer).bypassSecurityTrustHtml(closeIcon);

	readonly dismissible = input(true, {transform: auBooleanAttribute});
	readonly visible = model(false);
	readonly ariaCloseButtonLabel = input<string>('Close');
	readonly type = input<'info' | 'success' | 'error' | 'warning'>('success');
	readonly hidden = output();
	readonly shown = output();

	constructor() {
		super(
			callWidgetFactory({
				factory: createTransition,
				events: {
					onVisibleChange: (event) => this.visible.set(event),
					onShown: () => this.shown.emit(),
					onHidden: () => this.hidden.emit(),
				},
				defaultConfig: {
					transition: createSimpleClassTransition({
						showClasses: ['transition-opacity'],
						hideClasses: ['opacity-0'],
						animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
					}),
				},
			}),
		);
	}
}
