import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { categories } from '../shared/variables';

interface TaskModel {
	name: string;
	category: string;
	datetime: string;
}

@Component({
	moduleId: module.id,
	selector: 'add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
	@ViewChild('taskName') taskName: ElementRef;
	categories: any;
	taskModel: TaskModel;

	constructor(
		page: Page,
		private router: RouterExtensions
	) {
		page.actionBarHidden = true;
		this.categories = categories;
		this.taskModel = {
			name: '', category: '', datetime: ''
		};
	}

	setCategory(label: string) {
		this.taskModel.category = label;
	}

	cancel() {
		// this.router.navigate(['/home']);
		this.router.back();
	}

	saveTask() {
		this.router.navigate(['/home'], { clearHistory: true });
	}

	ngOnInit() { }

	ngAfterViewInit() {
		setTimeout(() => {
			this.taskName.nativeElement.focus();
		}, 600);
	}
}