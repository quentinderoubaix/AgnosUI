import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterModule],
	template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
	ngOnInit() {
		if (typeof window !== 'undefined') {
			window.addEventListener('storage', (event) => {
				if (event.key === 'theme') {
					if (event.newValue) {
						document.documentElement.setAttribute('data-theme', event.newValue);
					}
				}
			});
		}
	}
}
