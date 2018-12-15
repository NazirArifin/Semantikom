import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	constructor(
		page: Page,
		private router: RouterExtensions
	) {
		page.actionBarHidden = true;
	}

	add() {
		this.router.navigate(['/add']);
	}

	ngOnInit() { }
}