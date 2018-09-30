"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConstants_1 = require("../../constants/AppConstants");
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var SideDrawerComponent = /** @class */ (function () {
    function SideDrawerComponent() {
    }
    Object.defineProperty(SideDrawerComponent.prototype, "appTitle", {
        get: function () {
            return AppConstants_1.AppConstants.APP_TITLE;
        },
        enumerable: true,
        configurable: true
    });
    SideDrawerComponent.prototype.toggleSideDrawer = function () {
        this._sideDrawer.sideDrawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SideDrawerComponent.prototype, "_sideDrawer", void 0);
    SideDrawerComponent = __decorate([
        core_1.Component({
            selector: "ns-side-drawer",
            moduleId: module.id,
            templateUrl: "./side-drawer.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], SideDrawerComponent);
    return SideDrawerComponent;
}());
exports.SideDrawerComponent = SideDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQTREO0FBQzVELHNDQUFxRDtBQUVyRCw4REFBNEU7QUFPNUU7SUFJSTtJQUNBLENBQUM7SUFFRCxzQkFBVyx5Q0FBUTthQUFuQjtZQUNJLE9BQU8sMkJBQVksQ0FBQyxTQUFTLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFTSw4Q0FBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFYRDtRQURDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQ0osZ0NBQXNCOzREQUFDO0lBRjVDLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDOztPQUNXLG1CQUFtQixDQWMvQjtJQUFELDBCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BcHBDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtc2lkZS1kcmF3ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZGUtZHJhd2VyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVEcmF3ZXJDb21wb25lbnQge1xyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2lkZURyYXdlcjogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhcHBUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBBcHBDb25zdGFudHMuQVBQX1RJVExFO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVTaWRlRHJhd2VyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXIuc2lkZURyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==