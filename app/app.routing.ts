import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./views/home/home.component";
import { LocationBrowseComponent } from "./views/location-browse/location-browse.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "locations",
        children: [
            {
                path: "browse",
                component: LocationBrowseComponent
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
