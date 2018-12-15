"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var variables_1 = require("../shared/variables");
var AddComponent = /** @class */ (function () {
    function AddComponent(page, router) {
        this.router = router;
        page.actionBarHidden = true;
        this.categories = variables_1.categories;
        this.taskModel = {
            name: '', category: '', datetime: ''
        };
    }
    AddComponent.prototype.setCategory = function (label) {
        this.taskModel.category = label;
    };
    AddComponent.prototype.cancel = function () {
        // this.router.navigate(['/home']);
        this.router.back();
    };
    AddComponent.prototype.saveTask = function () {
        this.router.navigate(['/home'], { clearHistory: true });
    };
    AddComponent.prototype.ngOnInit = function () { };
    AddComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.taskName.nativeElement.focus();
        }, 600);
    };
    __decorate([
        core_1.ViewChild('taskName'),
        __metadata("design:type", core_1.ElementRef)
    ], AddComponent.prototype, "taskName", void 0);
    AddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUMvRCxpREFBaUQ7QUFlakQ7SUFLQyxzQkFDQyxJQUFVLEVBQ0YsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxzQkFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDaEIsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFO1NBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0MsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELCtCQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsc0NBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEEsVUFBVSxDQUFDO1lBQ1YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQWxDc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7a0RBQUM7SUFEaEMsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxLQUFLO1lBQ2YsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNsQyxDQUFDO3lDQVFNLFdBQUk7WUFDTSx5QkFBZ0I7T0FQckIsWUFBWSxDQW9DeEI7SUFBRCxtQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgY2F0ZWdvcmllcyB9IGZyb20gJy4uL3NoYXJlZC92YXJpYWJsZXMnO1xuXG5pbnRlcmZhY2UgVGFza01vZGVsIHtcblx0bmFtZTogc3RyaW5nO1xuXHRjYXRlZ29yeTogc3RyaW5nO1xuXHRkYXRldGltZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdhZGQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWRkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vYWRkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ3Rhc2tOYW1lJykgdGFza05hbWU6IEVsZW1lbnRSZWY7XG5cdGNhdGVnb3JpZXM6IGFueTtcblx0dGFza01vZGVsOiBUYXNrTW9kZWw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cGFnZTogUGFnZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9uc1xuXHQpIHtcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcblx0XHR0aGlzLnRhc2tNb2RlbCA9IHtcblx0XHRcdG5hbWU6ICcnLCBjYXRlZ29yeTogJycsIGRhdGV0aW1lOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzZXRDYXRlZ29yeShsYWJlbDogc3RyaW5nKSB7XG5cdFx0dGhpcy50YXNrTW9kZWwuY2F0ZWdvcnkgPSBsYWJlbDtcblx0fVxuXG5cdGNhbmNlbCgpIHtcblx0XHQvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuXHRcdHRoaXMucm91dGVyLmJhY2soKTtcblx0fVxuXG5cdHNhdmVUYXNrKCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudGFza05hbWUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdH0sIDYwMCk7XG5cdH1cbn0iXX0=