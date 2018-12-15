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
        this.router.navigate(['/home']);
        // this.router.back();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUMvRCxpREFBaUQ7QUFlakQ7SUFLQyxzQkFDQyxJQUFVLEVBQ0YsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxzQkFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDaEIsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFO1NBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLHNCQUFzQjtJQUN2QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsK0JBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxzQ0FBZSxHQUFmO1FBQUEsaUJBSUM7UUFIQSxVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBbENzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtrREFBQztJQURoQyxZQUFZO1FBUHhCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLEtBQUs7WUFDZixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ2xDLENBQUM7eUNBUU0sV0FBSTtZQUNNLHlCQUFnQjtPQVByQixZQUFZLENBb0N4QjtJQUFELG1CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSAnLi4vc2hhcmVkL3ZhcmlhYmxlcyc7XG5cbmludGVyZmFjZSBUYXNrTW9kZWwge1xuXHRuYW1lOiBzdHJpbmc7XG5cdGNhdGVnb3J5OiBzdHJpbmc7XG5cdGRhdGV0aW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2FkZCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9hZGQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9hZGQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QFZpZXdDaGlsZCgndGFza05hbWUnKSB0YXNrTmFtZTogRWxlbWVudFJlZjtcblx0Y2F0ZWdvcmllczogYW55O1xuXHR0YXNrTW9kZWw6IFRhc2tNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwYWdlOiBQYWdlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zXG5cdCkge1xuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0XHR0aGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXHRcdHRoaXMudGFza01vZGVsID0ge1xuXHRcdFx0bmFtZTogJycsIGNhdGVnb3J5OiAnJywgZGF0ZXRpbWU6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHNldENhdGVnb3J5KGxhYmVsOiBzdHJpbmcpIHtcblx0XHR0aGlzLnRhc2tNb2RlbC5jYXRlZ29yeSA9IGxhYmVsO1xuXHR9XG5cblx0Y2FuY2VsKCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG5cdFx0Ly8gdGhpcy5yb3V0ZXIuYmFjaygpO1xuXHR9XG5cblx0c2F2ZVRhc2soKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50YXNrTmFtZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0fSwgNjAwKTtcblx0fVxufSJdfQ==