import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { TaskList } from '../shared/variables';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	taskList: TaskList[] = [];

	constructor(
		page: Page,
		private router: RouterExtensions
	) {
		page.actionBarHidden = true;
		// this.taskList.push({
		// 	date: '12-12-2018',
		// 	data: [{
		// 		done: false,
		// 		category: 'work',
		// 		label: 'Meet with Jane',
		// 		time: '07:00 AM',
		// 		nofication: false
		// 	}, {
		// 		done: false,
		// 		category: 'work',
		// 		label: 'Meet with Jane',
		// 		time: '07:00 AM',
		// 		nofication: false
		// 	}]
		// });
	}

	add() {
		this.router.navigate(['/add']);
	}

	ngOnInit() { }
}