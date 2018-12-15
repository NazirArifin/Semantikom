"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, router) {
        this.router = router;
        this.taskList = [];
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
    HomeComponent.prototype.add = function () {
        this.router.navigate(['/add']);
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsc0RBQStEO0FBVS9EO0lBR0MsdUJBQ0MsSUFBVSxFQUNGLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSmpDLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFNekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0Isc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0Isc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04sTUFBTTtJQUNQLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQTlCRixhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuQyxDQUFDO3lDQU1NLFdBQUk7WUFDTSx5QkFBZ0I7T0FMckIsYUFBYSxDQStCekI7SUFBRCxvQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRhc2tMaXN0IH0gZnJvbSAnLi4vc2hhcmVkL3ZhcmlhYmxlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnaG9tZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dGFza0xpc3Q6IFRhc2tMaXN0W10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwYWdlOiBQYWdlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnNcclxuXHQpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHRcdC8vIHRoaXMudGFza0xpc3QucHVzaCh7XHJcblx0XHQvLyBcdGRhdGU6ICcxMi0xMi0yMDE4JyxcclxuXHRcdC8vIFx0ZGF0YTogW3tcclxuXHRcdC8vIFx0XHRkb25lOiBmYWxzZSxcclxuXHRcdC8vIFx0XHRjYXRlZ29yeTogJ3dvcmsnLFxyXG5cdFx0Ly8gXHRcdGxhYmVsOiAnTWVldCB3aXRoIEphbmUnLFxyXG5cdFx0Ly8gXHRcdHRpbWU6ICcwNzowMCBBTScsXHJcblx0XHQvLyBcdFx0bm9maWNhdGlvbjogZmFsc2VcclxuXHRcdC8vIFx0fSwge1xyXG5cdFx0Ly8gXHRcdGRvbmU6IGZhbHNlLFxyXG5cdFx0Ly8gXHRcdGNhdGVnb3J5OiAnd29yaycsXHJcblx0XHQvLyBcdFx0bGFiZWw6ICdNZWV0IHdpdGggSmFuZScsXHJcblx0XHQvLyBcdFx0dGltZTogJzA3OjAwIEFNJyxcclxuXHRcdC8vIFx0XHRub2ZpY2F0aW9uOiBmYWxzZVxyXG5cdFx0Ly8gXHR9XVxyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cclxuXHRhZGQoKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZGQnXSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHsgfVxyXG59Il19