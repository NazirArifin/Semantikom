"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var StartComponent = /** @class */ (function () {
    function StartComponent(page, router) {
        this.router = router;
        page.actionBarHidden = true;
    }
    StartComponent.prototype.enter = function () {
        this.router.navigate(['/home'], { clearHistory: true });
    };
    StartComponent.prototype.ngOnInit = function () { };
    StartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'start',
            templateUrl: './start.component.html',
            styleUrls: ['./start.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFTL0Q7SUFFQyx3QkFDQyxJQUFVLEVBQ0YsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBYkYsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDcEMsQ0FBQzt5Q0FLTSxXQUFJO1lBQ00seUJBQWdCO09BSnJCLGNBQWMsQ0FjMUI7SUFBRCxxQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnc3RhcnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdGFydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3RhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHBhZ2U6IFBhZ2UsXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9uc1xyXG5cdCkge1xyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0ZW50ZXIoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxufSJdfQ==