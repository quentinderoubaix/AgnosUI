import {isPlatformBrowser} from '@angular/common';
import type {OnInit} from '@angular/core';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterModule],
	template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
	readonly platformId = inject(PLATFORM_ID);

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			window.addEventListener('storage', (event) => {
				if (event.key === 'theme') {
					if (event.newValue) {
						document.documentElement.setAttribute('data-bs-theme', event.newValue);
					}
				}
			});
		}
	}
}
