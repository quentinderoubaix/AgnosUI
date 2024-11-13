import {beforeEach, describe, expect, test, vi} from 'vitest';
import {createAlert} from './alert';
import type {AlertWidget} from './alert';
import type {WidgetState} from '@agnos-ui/core/types';

describe(`Alert`, () => {
	let alert: AlertWidget;
	let state: WidgetState<AlertWidget>;

	beforeEach(() => {
		alert = createAlert();
		alert.state$.subscribe((newState) => {
			state = newState;
		});
	});

	test(`should create alert with a default state`, () => {
		expect(state).toEqual({
			className: '',
			dismissible: true,
			visible: true,
			hidden: false,
			ariaCloseButtonLabel: 'Close',
			children: undefined,
			structure: undefined,
			type: 'primary',
		});
	});

	test(`should close on method call`, () => {
		const expectedState = state;
		expect(expectedState.visible).toBe(true);
		alert.api.close();
		expectedState.visible = false;
		expectedState.hidden = true;
		expect(state).toEqual(expectedState);
	});

	test(`should open on method call`, () => {
		alert.patch({visible: false});
		const expectedState = state;
		expect(expectedState.visible).toBe(false);
		alert.api.open();
		expectedState.visible = true;
		expectedState.hidden = false;
		expect(state).toEqual(expectedState);
	});

	test.only('should emit events on change of the visibility', async () => {
		let onShownCounter = 0;
		let onHiddenCounter = 0;
		let onVisibleChangeCounter = 0;
		const element = document.createElement('div');
		element.innerHTML = '<div>body</div>';
		const alertEvents = createAlert({
			props: {
				onShown() {
					onShownCounter++;
				},
				onHidden() {
					onHiddenCounter++;
				},
				onVisibleChange() {
					onVisibleChangeCounter++;
				},
			},
		});
		alertEvents.directives.transitionDirective(element);

		alertEvents.api.close();
		await vi.waitFor(() => {
			if (!alertEvents.state$().hidden) {
				throw new Error();
			}
		});

		expect(onVisibleChangeCounter).toBe(1);
		expect(onShownCounter).toBe(0);
		expect(onHiddenCounter).toBe(1);

		alertEvents.api.open();
		await vi.waitFor(() => {
			if (onShownCounter !== 1) {
				throw new Error();
			}
		});
		expect(onVisibleChangeCounter).toBe(2);
		expect(onShownCounter).toBe(1);
		expect(onHiddenCounter).toBe(1);
	});
});
