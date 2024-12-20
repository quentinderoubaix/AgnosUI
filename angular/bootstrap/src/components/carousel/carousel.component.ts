import {BaseWidgetDirective} from '@agnos-ui/angular-headless';
import {type CarouselWidget, createCarousel} from './carousel.gen';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {callWidgetFactory} from '../../config';

@Component({
	selector: '[auCarousel]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class]': 'state.className()',
	},
	template: ` Yo !! `,
})
export class CarouselComponent extends BaseWidgetDirective<CarouselWidget> {
	constructor() {
		super(callWidgetFactory({factory: createCarousel, widgetName: 'carousel'}));
	}
}
