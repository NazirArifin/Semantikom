import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	constructor(
		page: Page
	) {
		page.actionBarHidden = true;
	}

	ngOnInit() { }
}