"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var nativescript_toast_1 = require("nativescript-toast");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var HomeLocationComponent = /** @class */ (function () {
    function HomeLocationComponent() {
        this._failureLocation = false;
        this._loadingLocation = false;
        this._restaurant = null;
        // this.getLocation();
    }
    Object.defineProperty(HomeLocationComponent.prototype, "failureLocation", {
        get: function () {
            return this._failureLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeLocationComponent.prototype, "failureLocationMessage", {
        get: function () {
            return "Could not find restaurant at your current location.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeLocationComponent.prototype, "loadingLocation", {
        get: function () {
            return this._loadingLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeLocationComponent.prototype, "restaurant", {
        get: function () {
            return this._restaurant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeLocationComponent.prototype, "unknownLocationMessage", {
        get: function () {
            return "Sorry, we could not determine where you are or this restaurant is not in our database.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeLocationComponent.prototype, "noLocationServicesMessage", {
        get: function () {
            return "Please enable location services on your device to show current location.";
        },
        enumerable: true,
        configurable: true
    });
    HomeLocationComponent.prototype.getLocation = function () {
        var _this = this;
        this._failureLocation = false;
        this._loadingLocation = true;
        rxjs_1.from(nativescript_geolocation_1.isEnabled()).pipe(operators_1.finalize(function () {
            _this._loadingLocation = false;
        }), operators_1.flatMap(function (locationEnabled) {
            if (locationEnabled) {
                return rxjs_1.from(nativescript_geolocation_1.getCurrentLocation({}));
            }
            nativescript_toast_1.makeText(_this.noLocationServicesMessage).show();
            return rxjs_1.of(null);
        }), operators_1.flatMap(function (location) {
            if (location) {
                return _this.getRestaurantAtLocation(location);
            }
            return rxjs_1.of(null);
        })).subscribe(function (restaurant) {
            if (restaurant) {
                _this._restaurant = restaurant;
            }
        }, function (error) {
            // TODO: Set this in a catch inside of getRestaurantAtLocation.
            _this._failureLocation = true;
            if (error instanceof Error) {
                // TODO: Do not display exception messages to end users.
                error = error.message;
            }
            nativescript_toast_1.makeText(error).show();
        });
    };
    HomeLocationComponent.prototype.getRestaurantAtLocation = function (location) {
        // TODO: Implement (API and app).
        return rxjs_1.of(null);
    };
    HomeLocationComponent = __decorate([
        core_1.Component({
            selector: "ns-home-location",
            moduleId: module.id,
            templateUrl: "./home-location.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeLocationComponent);
    return HomeLocationComponent;
}());
exports.HomeLocationComponent = HomeLocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sb2NhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLWxvY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxxRUFBdUg7QUFDdkgseURBQThDO0FBQzlDLDZCQUE0QztBQUM1Qyw0Q0FBbUQ7QUFRbkQ7SUFLSTtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixzQkFBc0I7SUFDMUIsQ0FBQztJQUVELHNCQUFXLGtEQUFlO2FBQTFCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5REFBc0I7YUFBakM7WUFDSSxPQUFPLHFEQUFxRCxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0RBQWU7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZDQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcseURBQXNCO2FBQWpDO1lBQ0ksT0FBTyx3RkFBd0YsQ0FBQztRQUNwRyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLDREQUF5QjthQUFyQztZQUNJLE9BQU8sMEVBQTBFLENBQUM7UUFDdEYsQ0FBQzs7O09BQUE7SUFFTywyQ0FBVyxHQUFuQjtRQUFBLGlCQXVDQztRQXRDRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFN0IsV0FBSSxDQUFDLG9DQUFpQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzFCLG9CQUFRLENBQUM7WUFDTCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxFQUNGLG1CQUFPLENBQUMsVUFBQSxlQUFlO1lBQ25CLElBQUksZUFBZSxFQUFFO2dCQUNqQixPQUFPLFdBQUksQ0FBQyw2Q0FBa0IsQ0FBQyxFQUM5QixDQUFDLENBQUMsQ0FBQzthQUNQO1lBRUQsNkJBQVEsQ0FBQyxLQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRCxPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsRUFDRixtQkFBTyxDQUFDLFVBQUMsUUFBcUI7WUFDMUIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsT0FBTyxLQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakQ7WUFFRCxPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FDTCxDQUFDLFNBQVMsQ0FBQyxVQUFDLFVBQXVCO1lBQ2hDLElBQUksVUFBVSxFQUFFO2dCQUNaLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQyxFQUFFLFVBQUMsS0FBcUI7WUFDckIsK0RBQStEO1lBQy9ELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFFN0IsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO2dCQUN4Qix3REFBd0Q7Z0JBQ3hELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3pCO1lBRUQsNkJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx1REFBdUIsR0FBL0IsVUFBZ0MsUUFBcUI7UUFDakQsaUNBQWlDO1FBQ2pDLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFqRlEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7O09BQ1cscUJBQXFCLENBa0ZqQztJQUFELDRCQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUFsRlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQgYXMgbG9jYXRpb25Jc0VuYWJsZWQsIExvY2F0aW9uIGFzIEdlb2xvY2F0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBtYWtlVGV4dCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgZmxhdE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBJUmVzdGF1cmFudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9JUmVzdGF1cmFudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1ob21lLWxvY2F0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLWxvY2F0aW9uLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVMb2NhdGlvbkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9mYWlsdXJlTG9jYXRpb246IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9sb2FkaW5nTG9jYXRpb246IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9yZXN0YXVyYW50OiBJUmVzdGF1cmFudDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZmFpbHVyZUxvY2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ0xvY2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzdGF1cmFudCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZhaWx1cmVMb2NhdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmFpbHVyZUxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZmFpbHVyZUxvY2F0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkNvdWxkIG5vdCBmaW5kIHJlc3RhdXJhbnQgYXQgeW91ciBjdXJyZW50IGxvY2F0aW9uLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbG9hZGluZ0xvY2F0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkaW5nTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZXN0YXVyYW50KCk6IElSZXN0YXVyYW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdGF1cmFudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVua25vd25Mb2NhdGlvbk1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJTb3JyeSwgd2UgY291bGQgbm90IGRldGVybWluZSB3aGVyZSB5b3UgYXJlIG9yIHRoaXMgcmVzdGF1cmFudCBpcyBub3QgaW4gb3VyIGRhdGFiYXNlLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IG5vTG9jYXRpb25TZXJ2aWNlc01lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJQbGVhc2UgZW5hYmxlIGxvY2F0aW9uIHNlcnZpY2VzIG9uIHlvdXIgZGV2aWNlIHRvIHNob3cgY3VycmVudCBsb2NhdGlvbi5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2F0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2ZhaWx1cmVMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdMb2NhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZyb20obG9jYXRpb25Jc0VuYWJsZWQoKSkucGlwZShcclxuICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGluZ0xvY2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmbGF0TWFwKGxvY2F0aW9uRW5hYmxlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25FbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWFrZVRleHQodGhpcy5ub0xvY2F0aW9uU2VydmljZXNNZXNzYWdlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmbGF0TWFwKChsb2NhdGlvbjogR2VvbG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlc3RhdXJhbnRBdExvY2F0aW9uKGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKHJlc3RhdXJhbnQ6IElSZXN0YXVyYW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN0YXVyYW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXN0YXVyYW50ID0gcmVzdGF1cmFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIChlcnJvcjogc3RyaW5nIHwgRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogU2V0IHRoaXMgaW4gYSBjYXRjaCBpbnNpZGUgb2YgZ2V0UmVzdGF1cmFudEF0TG9jYXRpb24uXHJcbiAgICAgICAgICAgIHRoaXMuX2ZhaWx1cmVMb2NhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRG8gbm90IGRpc3BsYXkgZXhjZXB0aW9uIG1lc3NhZ2VzIHRvIGVuZCB1c2Vycy5cclxuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFrZVRleHQoZXJyb3IpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlc3RhdXJhbnRBdExvY2F0aW9uKGxvY2F0aW9uOiBHZW9sb2NhdGlvbik6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCAoQVBJIGFuZCBhcHApLlxyXG4gICAgICAgIHJldHVybiBvZihudWxsKTtcclxuICAgIH1cclxufVxyXG4iXX0=