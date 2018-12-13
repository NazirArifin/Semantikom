import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {

	constructor(
		page: Page,
		private router: RouterExtensions
	) {
		page.actionBarHidden = true;
	}

	enter() {
		this.router.navigate(['/home'], { clearHistory: true });
	}

	ngOnInit() { }
}