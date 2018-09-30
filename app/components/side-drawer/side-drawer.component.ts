import { AppConstants } from "../../constants/AppConstants";
import { Component, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

@Component({
    selector: "ns-side-drawer",
    moduleId: module.id,
    templateUrl: "./side-drawer.component.html"
})
export class SideDrawerComponent {
    @ViewChild(RadSideDrawerComponent)
    private readonly _sideDrawer: RadSideDrawerComponent;

    public constructor() {
    }

    public get appTitle(): string {
        return AppConstants.APP_TITLE;
    }

    public toggleSideDrawer(): void {
        this._sideDrawer.sideDrawer.toggleDrawerState();
    }
}
