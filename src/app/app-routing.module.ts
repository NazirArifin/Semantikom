import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
    { path: "", redirectTo: "/start", pathMatch: "full" },
    { path: "start", component: StartComponent },
    { path: "home", component: HomeComponent },
    { path: "add", component: AddComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }